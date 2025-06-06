# Changelog

<!-- MONODEPLOY:BELOW -->

## [6.0.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@6.0.0...nestjs-cls@6.0.1) "nestjs-cls" (2025-06-02)<a name="6.0.1"></a>

### Bug Fixes

* **core**: remove unnecessary build step from prepack ([0d1e921](https://github.com/Papooch/nestjs-cls/commits/0d1e921))
* **core**: do not publish source maps (#322) ([0d1e921](https://github.com/Papooch/nestjs-cls/commits/0d1e921))




## [6.0.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.4.3...nestjs-cls@6.0.0) "nestjs-cls" (2025-05-29)<a name="6.0.0"></a>

### Breaking Changes

* The experimental Plugin API has been changed ([4623607](https://github.com/Papooch/nestjs-cls/commits/4623607))
* Access to Proxy providers moved to a dedicated `proxy` property on the ClsService ([82cdeef](https://github.com/Papooch/nestjs-cls/commits/82cdeef))

### Features

* **core**: introduce hooks for the Plugin API (#283) ([4623607](https://github.com/Papooch/nestjs-cls/commits/4623607))




## [5.4.3](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.4.2...nestjs-cls@5.4.3) "nestjs-cls" (2025-04-18)<a name="5.4.3"></a>

### Dependencies

* update nestjs-related deps ([a10e589](https://github.com/Papooch/nestjs-cls/commits/a10e589))
* update database deps ([4cb30aa](https://github.com/Papooch/nestjs-cls/commits/4cb30aa))
* update testing deps ([d92a42d](https://github.com/Papooch/nestjs-cls/commits/d92a42d))
* update dev deps ([f22b578](https://github.com/Papooch/nestjs-cls/commits/f22b578))
* update dev deps ([58874d3](https://github.com/Papooch/nestjs-cls/commits/58874d3))




## [5.4.2](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.4.1...nestjs-cls@5.4.2) "nestjs-cls" (2025-03-26)<a name="5.4.2"></a>

### Bug Fixes

* **core**: un-deprecate wrongly deprecated parts of the plugin API (#228) ([11ca429](https://github.com/Papooch/nestjs-cls/commits/11ca429))




## [5.4.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.4.0...nestjs-cls@5.4.1) "nestjs-cls" (2025-03-19)<a name="5.4.1"></a>

### Bug Fixes

* **core**: fix context loss when multiple enhancers are used with Fastify 5 ([b3d38c3](https://github.com/Papooch/nestjs-cls/commits/b3d38c3))
* **core**: reuse context when other Cls-enhancers are used together with ClsMiddleware with Fastify 5 (#223) ([b3d38c3](https://github.com/Papooch/nestjs-cls/commits/b3d38c3))




## [5.4.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.3.0...nestjs-cls@5.4.0) "nestjs-cls" (2025-02-17)<a name="5.4.0"></a>

### Features

* **core**: mark parts of old plugin API as deprecated, update docs (#217) ([48da8a2](https://github.com/Papooch/nestjs-cls/commits/48da8a2))




## [5.3.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.2.0...nestjs-cls@5.3.0) "nestjs-cls" (2025-02-16)<a name="5.3.0"></a>

### Bug Fixes

* **core**: add timeout to Proxy Provider resolution ([100d277](https://github.com/Papooch/nestjs-cls/commits/100d277))

### Features

* **core**: allow Proxy Providers to depend on each other ([90a7ee3](https://github.com/Papooch/nestjs-cls/commits/90a7ee3))




## [5.2.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.1.2...nestjs-cls@5.2.0) "nestjs-cls" (2025-02-10)<a name="5.2.0"></a>

### Dependencies

* allow nestjs 10 as peer dependency ([b7057cb](https://github.com/Papooch/nestjs-cls/commits/b7057cb))

### Features

* **core**: automatically detect fastify and express versions ([45a1be3](https://github.com/Papooch/nestjs-cls/commits/45a1be3))




## [5.1.2](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.1.1...nestjs-cls@5.1.2) "nestjs-cls" (2025-02-09)<a name="5.1.2"></a>

### Bug Fixes

* **core**: allow all Object.prototype key access on strict providers (#214) ([e938c6d](https://github.com/Papooch/nestjs-cls/commits/e938c6d))




## [5.1.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.1.0...nestjs-cls@5.1.1) "nestjs-cls" (2025-02-09)<a name="5.1.1"></a>

### Bug Fixes

* **core**: clarify error message for default proxy providers ([29ed8a4](https://github.com/Papooch/nestjs-cls/commits/29ed8a4))




## [5.1.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.0.1...nestjs-cls@5.1.0) "nestjs-cls" (2025-02-08)<a name="5.1.0"></a>

### Bug Fixes

* **core**: allow accessing constructor on strict proxy providers (#211) ([bf0f871](https://github.com/Papooch/nestjs-cls/commits/bf0f871))

### Features

* **core**: add saveCtx option in enhancer setup

This allows storing the ExecutionContext in the CLS (enabled by default) ([4dcda62](https://github.com/Papooch/nestjs-cls/commits/4dcda62))
* **core**: add `saveCtx` option in enhancer setup (#212) ([4dcda62](https://github.com/Papooch/nestjs-cls/commits/4dcda62))




## [5.0.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@5.0.0...nestjs-cls@5.0.1) "nestjs-cls" (2025-01-28)<a name="5.0.1"></a>

### Bug Fixes

* **core**: update fastify route pattern to support latest syntax (#206) ([dd87a33](https://github.com/Papooch/nestjs-cls/commits/dd87a33))




## [5.0.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.5.0...nestjs-cls@5.0.0) "nestjs-cls" (2025-01-21)<a name="5.0.0"></a>

### Breaking Changes

* The default mount point for express middleware has been changed from '*' to '/' ([4542aba](https://github.com/Papooch/nestjs-cls/commits/4542aba))

### Dependencies

* update all nestjs-related peer deps to latest (v11) ([915e797](https://github.com/Papooch/nestjs-cls/commits/915e797))

### Features

* **core**: support NestJS 11 ([4542aba](https://github.com/Papooch/nestjs-cls/commits/4542aba))




## [4.5.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.4.1...nestjs-cls@4.5.0) "nestjs-cls" (2024-12-07)<a name="4.5.0"></a>

### Features

* **core**: adds ClsModule.registerPlugins to inject Plugins from an external module (#192) ([11c40a0](https://github.com/Papooch/nestjs-cls/commits/11c40a0))




## [4.4.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.4.0...nestjs-cls@4.4.1) "nestjs-cls" (2024-08-06)<a name="4.4.1"></a>

### Bug Fixes

* **core**: support primitive values in websocket payload ([7f5c068](https://github.com/Papooch/nestjs-cls/commits/7f5c068))
* **core**: support primitive values in websocket payload (#172) ([7f5c068](https://github.com/Papooch/nestjs-cls/commits/7f5c068))




## [4.4.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.3.0...nestjs-cls@4.4.0) "nestjs-cls" (2024-07-26)<a name="4.4.0"></a>

### Features

* add `strict` option to proxy providers ([3f3de78](https://github.com/Papooch/nestjs-cls/commits/3f3de78))
* enable setting proxy provider `strict` option via a decorator. ([3f3de78](https://github.com/Papooch/nestjs-cls/commits/3f3de78))
* enable `strict` mode for Proxy Providers (#171) ([3f3de78](https://github.com/Papooch/nestjs-cls/commits/3f3de78))




## [4.3.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.2.1...nestjs-cls@4.3.0) "nestjs-cls" (2024-03-22)<a name="4.3.0"></a>

### Features

* add option to selectively resolve proxy providers ([26baa42](https://github.com/Papooch/nestjs-cls/commits/26baa42))
* selectively resolve proxy providers (#131) ([26baa42](https://github.com/Papooch/nestjs-cls/commits/26baa42))




## [4.2.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.2.0...nestjs-cls@4.2.1) "nestjs-cls" (2024-03-14)<a name="4.2.1"></a>

### Bug Fixes

* prevent context from leaking with ClsGuard (#129) ([7026fdf](https://github.com/Papooch/nestjs-cls/commits/7026fdf))




## [4.2.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.1.0...nestjs-cls@4.2.0) "nestjs-cls" (2024-02-21)<a name="4.2.0"></a>

### Bug Fixes

* make proxy providers compatible with #private fields ([367dfc7](https://github.com/Papooch/nestjs-cls/commits/367dfc7))

### Features

* add imperative API to get/set Proxy providers (#123) ([fbb27dc](https://github.com/Papooch/nestjs-cls/commits/fbb27dc))




## [4.1.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.0.4...nestjs-cls@4.1.0) "nestjs-cls" (2024-02-09)<a name="4.1.0"></a>

### Bug Fixes

* rework how plugins are registered (internals)

Previously all plugins' providers were mixed into one module,
now each plugin gets its own module. ([839df61](https://github.com/Papooch/nestjs-cls/commits/839df61))

### Features

* add multiple transactional adapters support

* Add tests for multiple named connections

* Add docs for multiple connections ([839df61](https://github.com/Papooch/nestjs-cls/commits/839df61))
* add support for multiple transactional adapters (#114) ([839df61](https://github.com/Papooch/nestjs-cls/commits/839df61))




## [4.0.4](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.0.3...nestjs-cls@4.0.4) "nestjs-cls" (2024-02-03)<a name="4.0.4"></a>

### Bug Fixes

* **core**: handle nested context correctly with UseCls decorator (#119) ([df90f30](https://github.com/Papooch/nestjs-cls/commits/df90f30))




## [4.0.3](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.0.2...nestjs-cls@4.0.3) "nestjs-cls" (2024-01-31)<a name="4.0.3"></a>

### Bug Fixes

* **proxy-provider-manager**: handle setting falsy value

Co-authored-by: Jerry Laloan <jerrylaloan@users.noreply.github.com> ([26737d8](https://github.com/Papooch/nestjs-cls/commits/26737d8))
* **core**: handle setting falsy value in proxy providers (#118) ([26737d8](https://github.com/Papooch/nestjs-cls/commits/26737d8))




## [4.0.2](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.0.1...nestjs-cls@4.0.2) "nestjs-cls" (2024-01-29)<a name="4.0.2"></a>

### Bug Fixes

* symbol key access and explicit constructor error (#113) ([0d4e97b](https://github.com/Papooch/nestjs-cls/commits/0d4e97b))




## [4.0.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@4.0.0...nestjs-cls@4.0.1) "nestjs-cls" (2024-01-22)<a name="4.0.1"></a>

### Bug Fixes

* update publish config ([da05ae7](https://github.com/Papooch/nestjs-cls/commits/da05ae7))




## [3.6.0](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@3.5.1...nestjs-cls@3.6.0) "nestjs-cls" (2023-10-18)<a name="3.6.0"></a>

### Features

* allow registering Proxy providers globally ([92d00f7](https://github.com/Papooch/nestjs-cls/commits/92d00f7))




## [3.5.1](https://github.com/Papooch/nestjs-cls/compare/nestjs-cls@3.5.0...nestjs-cls@3.5.1) "nestjs-cls" (2023-08-29)<a name="3.5.1"></a>

### Bug Fixes

* add rxjs and reflect-metadata as peer deps (#86) ([566f85a](https://github.com/Papooch/nestjs-cls/commits/566f85a))




## [3.5.0](https://github.com/Papooch/nestjs-cls/compare/v3.4.0...v3.5.0) "nestjs-cls" (2023-08-11)<a name="3.4.0"></a>

-   This is where we start the changelog with `monodeploy`. To view older changes, see Releases on GitHub or the commit history.
