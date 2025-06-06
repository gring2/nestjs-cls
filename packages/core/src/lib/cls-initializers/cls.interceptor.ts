import {
    CallHandler,
    ExecutionContext,
    Inject,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClsServiceManager } from '../cls-service-manager';
import { CLS_CTX, CLS_ID } from '../cls.constants';
import { CLS_INTERCEPTOR_OPTIONS } from '../cls.internal-constants';
import { ClsInterceptorOptions } from '../cls.options';
import { ClsEnhancerInitContext } from '../plugin/cls-plugin.interface';
import { ClsPluginsHooksHost } from '../plugin/cls-plugin-hooks-host';
import { ContextClsStoreMap } from './utils/context-cls-store-map';

@Injectable()
export class ClsInterceptor implements NestInterceptor {
    private readonly options: Omit<ClsInterceptorOptions, 'mount'>;

    constructor(
        @Inject(CLS_INTERCEPTOR_OPTIONS)
        options?: Omit<ClsInterceptorOptions, 'mount'> | undefined,
    ) {
        this.options = { ...new ClsInterceptorOptions(), ...options };
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const cls = ClsServiceManager.getClsService<any>();
        const clsStore = ContextClsStoreMap.get(context) ?? {};
        const pluginHooks = ClsPluginsHooksHost.getInstance();
        ContextClsStoreMap.set(context, clsStore);
        return new Observable((subscriber) => {
            cls.runWith(clsStore, async () => {
                const pluginCtx: ClsEnhancerInitContext = {
                    kind: 'interceptor',
                    ctx: context,
                };
                if (this.options.initializePlugins) {
                    await pluginHooks.beforeSetup(pluginCtx);
                }
                if (this.options.generateId) {
                    const id = await this.options.idGenerator?.(context);
                    cls.setIfUndefined<any>(CLS_ID, id);
                }
                if (this.options.saveCtx) {
                    cls.set<ExecutionContext>(CLS_CTX, context);
                }
                if (this.options.setup) {
                    await this.options.setup(cls, context);
                }
                if (this.options.initializePlugins) {
                    await pluginHooks.afterSetup(pluginCtx);
                }
                if (this.options.resolveProxyProviders) {
                    await cls.proxy.resolve();
                }
                try {
                    next.handle()
                        .pipe()
                        .subscribe({
                            next: (res) => subscriber.next(res),
                            error: (err) => subscriber.error(err),
                            complete: () => subscriber.complete(),
                        });
                } catch (e) {
                    subscriber.error(e);
                }
            });
        });
    }
}
