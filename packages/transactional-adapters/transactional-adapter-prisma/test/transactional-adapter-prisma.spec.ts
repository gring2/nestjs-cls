import {
    ClsPluginTransactional,
    InjectTransaction,
    Transaction,
    Transactional,
    TransactionHost,
} from '@nestjs-cls/transactional';
import { Injectable, Module } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Prisma, PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
import { ClsModule } from 'nestjs-cls';
import { TransactionalAdapterPrisma } from '../src';

process.env.DATA_SOURCE_URL = 'file:../tmp/test.db';

@Injectable()
class UserRepository {
    constructor(
        @InjectTransaction()
        private readonly tx: Transaction<TransactionalAdapterPrisma>,
    ) {}

    async getUserById(id: number) {
        return this.tx.user.findUnique({ where: { id } });
    }

    async createUser(name: string) {
        return this.tx.user.create({
            data: { name: name, email: `${name}@email.com` },
        });
    }
}

@Injectable()
class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,
        private readonly prisma: PrismaClient,
    ) {}

    async withoutTransaction() {
        const r1 = await this.userRepository.createUser('Jim');
        const r2 = await this.userRepository.getUserById(r1.id);
        return { r1, r2 };
    }

    @Transactional()
    async transactionWithDecorator() {
        const r1 = await this.userRepository.createUser('John');
        const r2 = await this.userRepository.getUserById(r1.id);
        return { r1, r2 };
    }

    @Transactional<TransactionalAdapterPrisma>({
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    })
    async transactionWithDecoratorWithOptions() {
        const r1 = await this.userRepository.createUser('James');
        const r2 = await this.prisma.user.findUnique({
            where: { id: r1.id },
        });
        const r3 = await this.userRepository.getUserById(r1.id);
        return { r1, r2, r3 };
    }

    async transactionWithFunctionWrapper() {
        return this.txHost.withTransaction(
            {
                isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
            },
            async () => {
                const r1 = await this.userRepository.createUser('Joe');
                const r2 = await this.prisma.user.findUnique({
                    where: { id: r1.id },
                });
                const r3 = await this.userRepository.getUserById(r1.id);
                return { r1, r2, r3 };
            },
        );
    }

    @Transactional()
    async transactionWithDecoratorError() {
        await this.userRepository.createUser('Nobody');
        throw new Error('Rollback');
    }
}

@Module({
    providers: [PrismaClient],
    exports: [PrismaClient],
})
class PrismaModule {}

@Module({
    imports: [
        PrismaModule,
        ClsModule.forRoot({
            plugins: [
                new ClsPluginTransactional({
                    imports: [PrismaModule],
                    adapter: new TransactionalAdapterPrisma({
                        prismaInjectionToken: PrismaClient,
                    }),
                    enableTransactionProxy: true,
                }),
            ],
        }),
    ],
    providers: [UserService, UserRepository],
})
class AppModule {}

describe('Transactional', () => {
    let module: TestingModule;
    let callingService: UserService;
    let prisma: PrismaClient;

    beforeAll(async () => {
        execSync('yarn prisma migrate reset --force', { env: process.env });
    });

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        await module.init();
        callingService = module.get(UserService);
        prisma = module.get(PrismaClient);
    });

    describe('TransactionalAdapterPrisma', () => {
        it('should work without an active transaction', async () => {
            const { r1, r2 } = await callingService.withoutTransaction();
            expect(r1).toEqual(r2);
            const users = await prisma.user.findMany();
            expect(users).toEqual(expect.arrayContaining([r1]));
        });

        it('should run a transaction with the default options with a decorator', async () => {
            const { r1, r2 } = await callingService.transactionWithDecorator();
            expect(r1).toEqual(r2);
            const users = await prisma.user.findMany();
            expect(users).toEqual(expect.arrayContaining([r1]));
        });

        it('should run a transaction with the specified options with a decorator', async () => {
            const { r1, r2, r3 } =
                await callingService.transactionWithDecoratorWithOptions();
            expect(r1).toEqual(r3);
            expect(r2).toBeNull();
            const users = await prisma.user.findMany();
            expect(users).toEqual(expect.arrayContaining([r1]));
        });
        it('should run a transaction with the specified options with a function wrapper', async () => {
            const { r1, r2, r3 } =
                await callingService.transactionWithFunctionWrapper();
            expect(r1).toEqual(r3);
            expect(r2).toBeNull();
            const users = await prisma.user.findMany();
            expect(users).toEqual(expect.arrayContaining([r1]));
        });

        it('should rollback a transaction on error', async () => {
            await expect(
                callingService.transactionWithDecoratorError(),
            ).rejects.toThrow(new Error('Rollback'));
            const users = await prisma.user.findMany();
            expect(users).toEqual(
                expect.not.arrayContaining([{ name: 'Nobody' }]),
            );
        });
    });
});

describe('Default options', () => {
    it('Should correctly set default options on the adapter instance', async () => {
        const adapter = new TransactionalAdapterPrisma({
            prismaInjectionToken: PrismaClient,
            defaultTxOptions: {
                timeout: 24,
            },
        });

        expect(adapter.defaultTxOptions).toEqual({
            timeout: 24,
        });
    });
});
