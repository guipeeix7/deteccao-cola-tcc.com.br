'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">argon-dashboard-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link" >AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminLayoutModule-5e742238508df96ea53b25dc6669e29695f5029cc11257f69adb5bae19faebbf628554931495706a0c0cb95b6724b31a716fc43a7659aa9a0cda3457fd7b2968"' : 'data-target="#xs-components-links-module-AdminLayoutModule-5e742238508df96ea53b25dc6669e29695f5029cc11257f69adb5bae19faebbf628554931495706a0c0cb95b6724b31a716fc43a7659aa9a0cda3457fd7b2968"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-5e742238508df96ea53b25dc6669e29695f5029cc11257f69adb5bae19faebbf628554931495706a0c0cb95b6724b31a716fc43a7659aa9a0cda3457fd7b2968"' :
                                            'id="xs-components-links-module-AdminLayoutModule-5e742238508df96ea53b25dc6669e29695f5029cc11257f69adb5bae19faebbf628554931495706a0c0cb95b6724b31a716fc43a7659aa9a0cda3457fd7b2968"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlternativaModule.html" data-type="entity-link" >AlternativaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlternativaModule-b73419f7245577ae790b57e570c5e3f715fe4d70f30b31bfb842ef13cb4b4c9a4f28c64e5ff5eee9fd151ca480350fbd7fe07701c7e5da6b8f09a5e9cf551cc0"' : 'data-target="#xs-components-links-module-AlternativaModule-b73419f7245577ae790b57e570c5e3f715fe4d70f30b31bfb842ef13cb4b4c9a4f28c64e5ff5eee9fd151ca480350fbd7fe07701c7e5da6b8f09a5e9cf551cc0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlternativaModule-b73419f7245577ae790b57e570c5e3f715fe4d70f30b31bfb842ef13cb4b4c9a4f28c64e5ff5eee9fd151ca480350fbd7fe07701c7e5da6b8f09a5e9cf551cc0"' :
                                            'id="xs-components-links-module-AlternativaModule-b73419f7245577ae790b57e570c5e3f715fe4d70f30b31bfb842ef13cb4b4c9a4f28c64e5ff5eee9fd151ca480350fbd7fe07701c7e5da6b8f09a5e9cf551cc0"' }>
                                            <li class="link">
                                                <a href="components/AlternativaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlternativaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateAlternativaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAlternativaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListAlternativaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAlternativaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateAlternativaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateAlternativaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlternativaRoutingModule.html" data-type="entity-link" >AlternativaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-afec54f20e7a2baacb0e12cb12679e1fc9d9dd1a4238b3738f0c4824784e891fc04535ea08d1389644102496e2c1953506247a91f227601237e6e4606730054b"' : 'data-target="#xs-components-links-module-AppModule-afec54f20e7a2baacb0e12cb12679e1fc9d9dd1a4238b3738f0c4824784e891fc04535ea08d1389644102496e2c1953506247a91f227601237e6e4606730054b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-afec54f20e7a2baacb0e12cb12679e1fc9d9dd1a4238b3738f0c4824784e891fc04535ea08d1389644102496e2c1953506247a91f227601237e6e4606730054b"' :
                                            'id="xs-components-links-module-AppModule-afec54f20e7a2baacb0e12cb12679e1fc9d9dd1a4238b3738f0c4824784e891fc04535ea08d1389644102496e2c1953506247a91f227601237e6e4606730054b"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AreaModule.html" data-type="entity-link" >AreaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AreaModule-fe171f01a4419f0073c2ee6da15ecbb3428b65b320e68ed7fbc41e3cde1172a67f2485fc4f3ea4cda45557fbc7598e26d9a165100ece5ede8f76434413edadd0"' : 'data-target="#xs-components-links-module-AreaModule-fe171f01a4419f0073c2ee6da15ecbb3428b65b320e68ed7fbc41e3cde1172a67f2485fc4f3ea4cda45557fbc7598e26d9a165100ece5ede8f76434413edadd0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AreaModule-fe171f01a4419f0073c2ee6da15ecbb3428b65b320e68ed7fbc41e3cde1172a67f2485fc4f3ea4cda45557fbc7598e26d9a165100ece5ede8f76434413edadd0"' :
                                            'id="xs-components-links-module-AreaModule-fe171f01a4419f0073c2ee6da15ecbb3428b65b320e68ed7fbc41e3cde1172a67f2485fc4f3ea4cda45557fbc7598e26d9a165100ece5ede8f76434413edadd0"' }>
                                            <li class="link">
                                                <a href="components/AreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateAreaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AreaRoutingModule.html" data-type="entity-link" >AreaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AssuntoModule.html" data-type="entity-link" >AssuntoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AssuntoModule-e890edd9ab13722b4fb626b77c9aaa397eebe22cc17b431c3facbfa927d04549da05c8e3a5dbef42f907cdfb324eb2c3456f32d4ae24d15c146194f9f6815710"' : 'data-target="#xs-components-links-module-AssuntoModule-e890edd9ab13722b4fb626b77c9aaa397eebe22cc17b431c3facbfa927d04549da05c8e3a5dbef42f907cdfb324eb2c3456f32d4ae24d15c146194f9f6815710"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AssuntoModule-e890edd9ab13722b4fb626b77c9aaa397eebe22cc17b431c3facbfa927d04549da05c8e3a5dbef42f907cdfb324eb2c3456f32d4ae24d15c146194f9f6815710"' :
                                            'id="xs-components-links-module-AssuntoModule-e890edd9ab13722b4fb626b77c9aaa397eebe22cc17b431c3facbfa927d04549da05c8e3a5dbef42f907cdfb324eb2c3456f32d4ae24d15c146194f9f6815710"' }>
                                            <li class="link">
                                                <a href="components/AssuntoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssuntoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateAssuntoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAssuntoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateAssuntoModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAssuntoModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListAssuntoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAssuntoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateAssuntoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateAssuntoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssuntoRoutingModule.html" data-type="entity-link" >AssuntoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthLayoutModule.html" data-type="entity-link" >AuthLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthLayoutModule-6a3280ab3a6831f22f91983968f4c7b1fa0f75868bcd2d0bd844d822be9fa969af1628fa0479ab3dbc593315711e044b308e702354d3f16d275526809d93b459"' : 'data-target="#xs-components-links-module-AuthLayoutModule-6a3280ab3a6831f22f91983968f4c7b1fa0f75868bcd2d0bd844d822be9fa969af1628fa0479ab3dbc593315711e044b308e702354d3f16d275526809d93b459"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthLayoutModule-6a3280ab3a6831f22f91983968f4c7b1fa0f75868bcd2d0bd844d822be9fa969af1628fa0479ab3dbc593315711e044b308e702354d3f16d275526809d93b459"' :
                                            'id="xs-components-links-module-AuthLayoutModule-6a3280ab3a6831f22f91983968f4c7b1fa0f75868bcd2d0bd844d822be9fa969af1628fa0479ab3dbc593315711e044b308e702354d3f16d275526809d93b459"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BancaModule.html" data-type="entity-link" >BancaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BancaModule-bf968b8e050fd65d670423d70b0284b5e2ceca2f5f887120f6c2d9a987c73222028f9212094db76610afb6d2c79c3686366e1f3b4af7689593ded8bbfe1157c8"' : 'data-target="#xs-components-links-module-BancaModule-bf968b8e050fd65d670423d70b0284b5e2ceca2f5f887120f6c2d9a987c73222028f9212094db76610afb6d2c79c3686366e1f3b4af7689593ded8bbfe1157c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BancaModule-bf968b8e050fd65d670423d70b0284b5e2ceca2f5f887120f6c2d9a987c73222028f9212094db76610afb6d2c79c3686366e1f3b4af7689593ded8bbfe1157c8"' :
                                            'id="xs-components-links-module-BancaModule-bf968b8e050fd65d670423d70b0284b5e2ceca2f5f887120f6c2d9a987c73222028f9212094db76610afb6d2c79c3686366e1f3b4af7689593ded8bbfe1157c8"' }>
                                            <li class="link">
                                                <a href="components/BancaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BancaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBancaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBancaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListBancaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListBancaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateBancaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateBancaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BancasRoutingModule.html" data-type="entity-link" >BancasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseItemModule.html" data-type="entity-link" >BaseItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseItemModule-cf49ceb28dbcaf90a2a49a36fca4b56611e88a4d52cdbfa46b0f4b11cdfae31c200f3027b9e257eec47a7d32831d1a6926fd333afcf940b4a67e272845f98951"' : 'data-target="#xs-components-links-module-BaseItemModule-cf49ceb28dbcaf90a2a49a36fca4b56611e88a4d52cdbfa46b0f4b11cdfae31c200f3027b9e257eec47a7d32831d1a6926fd333afcf940b4a67e272845f98951"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseItemModule-cf49ceb28dbcaf90a2a49a36fca4b56611e88a4d52cdbfa46b0f4b11cdfae31c200f3027b9e257eec47a7d32831d1a6926fd333afcf940b4a67e272845f98951"' :
                                            'id="xs-components-links-module-BaseItemModule-cf49ceb28dbcaf90a2a49a36fca4b56611e88a4d52cdbfa46b0f4b11cdfae31c200f3027b9e257eec47a7d32831d1a6926fd333afcf940b4a67e272845f98951"' }>
                                            <li class="link">
                                                <a href="components/BaseItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BaseListModule.html" data-type="entity-link" >BaseListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseListModule-04222901bdb655e244dfb854d170429a7c0a16297fd5b978f9c2871ad9f97e63c1b1c8bd12c1fe1e8e429b1fd37d07de0a4541fcf61075d0de90d1a0041b2444"' : 'data-target="#xs-components-links-module-BaseListModule-04222901bdb655e244dfb854d170429a7c0a16297fd5b978f9c2871ad9f97e63c1b1c8bd12c1fe1e8e429b1fd37d07de0a4541fcf61075d0de90d1a0041b2444"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseListModule-04222901bdb655e244dfb854d170429a7c0a16297fd5b978f9c2871ad9f97e63c1b1c8bd12c1fe1e8e429b1fd37d07de0a4541fcf61075d0de90d1a0041b2444"' :
                                            'id="xs-components-links-module-BaseListModule-04222901bdb655e244dfb854d170429a7c0a16297fd5b978f9c2871ad9f97e63c1b1c8bd12c1fe1e8e429b1fd37d07de0a4541fcf61075d0de90d1a0041b2444"' }>
                                            <li class="link">
                                                <a href="components/BaseListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BaseUpdateModule.html" data-type="entity-link" >BaseUpdateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseUpdateModule-b72840d219e93bcb87e43cb460163a9306c84919d84cb02a259bce0730c4c52aa2898cf616a3bbbe82da34081eb3c6a3730447815e390b4fa7f251167adc71dd"' : 'data-target="#xs-components-links-module-BaseUpdateModule-b72840d219e93bcb87e43cb460163a9306c84919d84cb02a259bce0730c4c52aa2898cf616a3bbbe82da34081eb3c6a3730447815e390b4fa7f251167adc71dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseUpdateModule-b72840d219e93bcb87e43cb460163a9306c84919d84cb02a259bce0730c4c52aa2898cf616a3bbbe82da34081eb3c6a3730447815e390b4fa7f251167adc71dd"' :
                                            'id="xs-components-links-module-BaseUpdateModule-b72840d219e93bcb87e43cb460163a9306c84919d84cb02a259bce0730c4c52aa2898cf616a3bbbe82da34081eb3c6a3730447815e390b4fa7f251167adc71dd"' }>
                                            <li class="link">
                                                <a href="components/BaseUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseUpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BaseViewModule.html" data-type="entity-link" >BaseViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseViewModule-f6a777bda570b1858270b33fd5d8dca81369154e9bd8b2a476aff4e6380ee4e70dc21e7957329421f494b9a6aab7d619611aba808cc13de0357b26b5c71b315f"' : 'data-target="#xs-components-links-module-BaseViewModule-f6a777bda570b1858270b33fd5d8dca81369154e9bd8b2a476aff4e6380ee4e70dc21e7957329421f494b9a6aab7d619611aba808cc13de0357b26b5c71b315f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseViewModule-f6a777bda570b1858270b33fd5d8dca81369154e9bd8b2a476aff4e6380ee4e70dc21e7957329421f494b9a6aab7d619611aba808cc13de0357b26b5c71b315f"' :
                                            'id="xs-components-links-module-BaseViewModule-f6a777bda570b1858270b33fd5d8dca81369154e9bd8b2a476aff4e6380ee4e70dc21e7957329421f494b9a6aab7d619611aba808cc13de0357b26b5c71b315f"' }>
                                            <li class="link">
                                                <a href="components/BaseViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CollapseAccordionModule.html" data-type="entity-link" >CollapseAccordionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CollapseAccordionModule-79eca047d84038f3e19dbaaaf8746b2c7e6a6798c7d700075d4e5dabe8aca60d6d8a1c8d7a5f2a828391313e1a1c801a0f2447f7c52c34b660edfa5e69aed2c3"' : 'data-target="#xs-components-links-module-CollapseAccordionModule-79eca047d84038f3e19dbaaaf8746b2c7e6a6798c7d700075d4e5dabe8aca60d6d8a1c8d7a5f2a828391313e1a1c801a0f2447f7c52c34b660edfa5e69aed2c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CollapseAccordionModule-79eca047d84038f3e19dbaaaf8746b2c7e6a6798c7d700075d4e5dabe8aca60d6d8a1c8d7a5f2a828391313e1a1c801a0f2447f7c52c34b660edfa5e69aed2c3"' :
                                            'id="xs-components-links-module-CollapseAccordionModule-79eca047d84038f3e19dbaaaf8746b2c7e6a6798c7d700075d4e5dabe8aca60d6d8a1c8d7a5f2a828391313e1a1c801a0f2447f7c52c34b660edfa5e69aed2c3"' }>
                                            <li class="link">
                                                <a href="components/CollapseAccordionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollapseAccordionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CollapseItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollapseItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-b57acdb7099ef8ed9c73526edc92d5ef7e822c29df07a797c17942b04f0ffd55308eb81a34b63173f084504e9b25a9b185186695752da0178333b6128e197dc1"' : 'data-target="#xs-components-links-module-ComponentsModule-b57acdb7099ef8ed9c73526edc92d5ef7e822c29df07a797c17942b04f0ffd55308eb81a34b63173f084504e9b25a9b185186695752da0178333b6128e197dc1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-b57acdb7099ef8ed9c73526edc92d5ef7e822c29df07a797c17942b04f0ffd55308eb81a34b63173f084504e9b25a9b185186695752da0178333b6128e197dc1"' :
                                            'id="xs-components-links-module-ComponentsModule-b57acdb7099ef8ed9c73526edc92d5ef7e822c29df07a797c17942b04f0ffd55308eb81a34b63173f084504e9b25a9b185186695752da0178333b6128e197dc1"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConcursoModule.html" data-type="entity-link" >ConcursoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConcursoModule-1f12d21cdd94f575a8201403e611aee6ae718c81fdfb81db6c1376af68d49a54e231184c7d9ce918f9a335b4fc08521bad441e8c03789d09e9c675f7ea75e0fc"' : 'data-target="#xs-components-links-module-ConcursoModule-1f12d21cdd94f575a8201403e611aee6ae718c81fdfb81db6c1376af68d49a54e231184c7d9ce918f9a335b4fc08521bad441e8c03789d09e9c675f7ea75e0fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConcursoModule-1f12d21cdd94f575a8201403e611aee6ae718c81fdfb81db6c1376af68d49a54e231184c7d9ce918f9a335b4fc08521bad441e8c03789d09e9c675f7ea75e0fc"' :
                                            'id="xs-components-links-module-ConcursoModule-1f12d21cdd94f575a8201403e611aee6ae718c81fdfb81db6c1376af68d49a54e231184c7d9ce918f9a335b4fc08521bad441e8c03789d09e9c675f7ea75e0fc"' }>
                                            <li class="link">
                                                <a href="components/ConcursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConcursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateConcursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateConcursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListConcursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListConcursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateConcursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateConcursoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConcursoRoutingModule.html" data-type="entity-link" >ConcursoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CorrecaoModule.html" data-type="entity-link" >CorrecaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CorrecaoModule-24ac5006ae7bafba966a02d74e0b9e42f617ba93b65e211dbe2edd75b7e9f1330eee1af5a163f6e7acc320c06098b5821bc27b30d60c5a0bf1b2a32bcdcc9d70"' : 'data-target="#xs-components-links-module-CorrecaoModule-24ac5006ae7bafba966a02d74e0b9e42f617ba93b65e211dbe2edd75b7e9f1330eee1af5a163f6e7acc320c06098b5821bc27b30d60c5a0bf1b2a32bcdcc9d70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CorrecaoModule-24ac5006ae7bafba966a02d74e0b9e42f617ba93b65e211dbe2edd75b7e9f1330eee1af5a163f6e7acc320c06098b5821bc27b30d60c5a0bf1b2a32bcdcc9d70"' :
                                            'id="xs-components-links-module-CorrecaoModule-24ac5006ae7bafba966a02d74e0b9e42f617ba93b65e211dbe2edd75b7e9f1330eee1af5a163f6e7acc320c06098b5821bc27b30d60c5a0bf1b2a32bcdcc9d70"' }>
                                            <li class="link">
                                                <a href="components/CorrecaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CorrecaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCorrecaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCorrecaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateQuestionLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateQuestionLinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListCorrecaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListCorrecaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateCorrecaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCorrecaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CorrecaoRoutingModule.html" data-type="entity-link" >CorrecaoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CursoModule.html" data-type="entity-link" >CursoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CursoModule-3473b5fb84e260131ae428c2f131329aca2449159f63ad38875af026bfe8b1a2a1f66330eec1e31d1fc0ea11d8974b0e381f10d0e9140700a5f13f8d3d0129ec"' : 'data-target="#xs-components-links-module-CursoModule-3473b5fb84e260131ae428c2f131329aca2449159f63ad38875af026bfe8b1a2a1f66330eec1e31d1fc0ea11d8974b0e381f10d0e9140700a5f13f8d3d0129ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CursoModule-3473b5fb84e260131ae428c2f131329aca2449159f63ad38875af026bfe8b1a2a1f66330eec1e31d1fc0ea11d8974b0e381f10d0e9140700a5f13f8d3d0129ec"' :
                                            'id="xs-components-links-module-CursoModule-3473b5fb84e260131ae428c2f131329aca2449159f63ad38875af026bfe8b1a2a1f66330eec1e31d1fc0ea11d8974b0e381f10d0e9140700a5f13f8d3d0129ec"' }>
                                            <li class="link">
                                                <a href="components/CreateCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListCursoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCursoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CursoRoutingModule.html" data-type="entity-link" >CursoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomSelectableListModule.html" data-type="entity-link" >CustomSelectableListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomSelectableListModule-a1e30dc829bae7889683c72784d6d014fce09c9aee701bd5867e220eca4847b08431bf1134790cfebcb46af94da530a9b82a621b23c98909bddf1c92b4c44f30"' : 'data-target="#xs-components-links-module-CustomSelectableListModule-a1e30dc829bae7889683c72784d6d014fce09c9aee701bd5867e220eca4847b08431bf1134790cfebcb46af94da530a9b82a621b23c98909bddf1c92b4c44f30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomSelectableListModule-a1e30dc829bae7889683c72784d6d014fce09c9aee701bd5867e220eca4847b08431bf1134790cfebcb46af94da530a9b82a621b23c98909bddf1c92b4c44f30"' :
                                            'id="xs-components-links-module-CustomSelectableListModule-a1e30dc829bae7889683c72784d6d014fce09c9aee701bd5867e220eca4847b08431bf1134790cfebcb46af94da530a9b82a621b23c98909bddf1c92b4c44f30"' }>
                                            <li class="link">
                                                <a href="components/CustomSelectableListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomSelectableListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectableItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectableItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DisciplinaModule.html" data-type="entity-link" >DisciplinaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DisciplinaModule-8cdde592e3324e719ece23689d97394ec82641d714ed240640c52679a4e16d115d438b4a8bd02748b523ae317c3b8d2b04d617bedf7b7ea0654605dd2ae9309b"' : 'data-target="#xs-components-links-module-DisciplinaModule-8cdde592e3324e719ece23689d97394ec82641d714ed240640c52679a4e16d115d438b4a8bd02748b523ae317c3b8d2b04d617bedf7b7ea0654605dd2ae9309b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DisciplinaModule-8cdde592e3324e719ece23689d97394ec82641d714ed240640c52679a4e16d115d438b4a8bd02748b523ae317c3b8d2b04d617bedf7b7ea0654605dd2ae9309b"' :
                                            'id="xs-components-links-module-DisciplinaModule-8cdde592e3324e719ece23689d97394ec82641d714ed240640c52679a4e16d115d438b4a8bd02748b523ae317c3b8d2b04d617bedf7b7ea0654605dd2ae9309b"' }>
                                            <li class="link">
                                                <a href="components/CreateDisciplinaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateDisciplinaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisciplinaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisciplinaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListDisciplinaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDisciplinaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateDisciplinaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateDisciplinaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DisciplinaRoutingModule.html" data-type="entity-link" >DisciplinaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DyamicSelectModule.html" data-type="entity-link" >DyamicSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DyamicSelectModule-5636e7d6bc1e2f49b8fae0e1f6e2b844bf0bf024f0d3b690dfdf18abbc23cc4a41fd941af208b1cc09b39017c693f397cc8329755c4546f1b79cd84e8395eb30"' : 'data-target="#xs-components-links-module-DyamicSelectModule-5636e7d6bc1e2f49b8fae0e1f6e2b844bf0bf024f0d3b690dfdf18abbc23cc4a41fd941af208b1cc09b39017c693f397cc8329755c4546f1b79cd84e8395eb30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DyamicSelectModule-5636e7d6bc1e2f49b8fae0e1f6e2b844bf0bf024f0d3b690dfdf18abbc23cc4a41fd941af208b1cc09b39017c693f397cc8329755c4546f1b79cd84e8395eb30"' :
                                            'id="xs-components-links-module-DyamicSelectModule-5636e7d6bc1e2f49b8fae0e1f6e2b844bf0bf024f0d3b690dfdf18abbc23cc4a41fd941af208b1cc09b39017c693f397cc8329755c4546f1b79cd84e8395eb30"' }>
                                            <li class="link">
                                                <a href="components/DyamicSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DyamicSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicFileInputModule.html" data-type="entity-link" >DynamicFileInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicFileInputModule-9ceca889bf0f0eefce8abd51f22a745d4e31a0fd530cc4564ab496ea19984646f1157e702f2d3ad285ac7a41f0ab29a7cbc211ff6f65fa9ce6df1df6ff8db41e"' : 'data-target="#xs-components-links-module-DynamicFileInputModule-9ceca889bf0f0eefce8abd51f22a745d4e31a0fd530cc4564ab496ea19984646f1157e702f2d3ad285ac7a41f0ab29a7cbc211ff6f65fa9ce6df1df6ff8db41e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicFileInputModule-9ceca889bf0f0eefce8abd51f22a745d4e31a0fd530cc4564ab496ea19984646f1157e702f2d3ad285ac7a41f0ab29a7cbc211ff6f65fa9ce6df1df6ff8db41e"' :
                                            'id="xs-components-links-module-DynamicFileInputModule-9ceca889bf0f0eefce8abd51f22a745d4e31a0fd530cc4564ab496ea19984646f1157e702f2d3ad285ac7a41f0ab29a7cbc211ff6f65fa9ce6df1df6ff8db41e"' }>
                                            <li class="link">
                                                <a href="components/DynamicFileInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicFileInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicPaginatorModule.html" data-type="entity-link" >DynamicPaginatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicPaginatorModule-6cc2499aa57491e2f63d282ef7010d752323928e15c0a3a627a2e1bdc47aca51c2860841971728bf6ae921126d73c4e26bcc8f772ad765c6ff1adb9d5276058d"' : 'data-target="#xs-components-links-module-DynamicPaginatorModule-6cc2499aa57491e2f63d282ef7010d752323928e15c0a3a627a2e1bdc47aca51c2860841971728bf6ae921126d73c4e26bcc8f772ad765c6ff1adb9d5276058d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicPaginatorModule-6cc2499aa57491e2f63d282ef7010d752323928e15c0a3a627a2e1bdc47aca51c2860841971728bf6ae921126d73c4e26bcc8f772ad765c6ff1adb9d5276058d"' :
                                            'id="xs-components-links-module-DynamicPaginatorModule-6cc2499aa57491e2f63d282ef7010d752323928e15c0a3a627a2e1bdc47aca51c2860841971728bf6ae921126d73c4e26bcc8f772ad765c6ff1adb9d5276058d"' }>
                                            <li class="link">
                                                <a href="components/DynamicPaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicPaginatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicTableByIdModule.html" data-type="entity-link" >DynamicTableByIdModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicTableByIdModule-ee88fd2a740572115c56acf3d299ea2d43af83c80d4d2994ea587a4b8b386733ff4001ddcf289184beeac42e121ccaf10daf7dedf61c2fa921599ae887ac6b75"' : 'data-target="#xs-components-links-module-DynamicTableByIdModule-ee88fd2a740572115c56acf3d299ea2d43af83c80d4d2994ea587a4b8b386733ff4001ddcf289184beeac42e121ccaf10daf7dedf61c2fa921599ae887ac6b75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicTableByIdModule-ee88fd2a740572115c56acf3d299ea2d43af83c80d4d2994ea587a4b8b386733ff4001ddcf289184beeac42e121ccaf10daf7dedf61c2fa921599ae887ac6b75"' :
                                            'id="xs-components-links-module-DynamicTableByIdModule-ee88fd2a740572115c56acf3d299ea2d43af83c80d4d2994ea587a4b8b386733ff4001ddcf289184beeac42e121ccaf10daf7dedf61c2fa921599ae887ac6b75"' }>
                                            <li class="link">
                                                <a href="components/DynamicTableByIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicTableByIdComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicTableModule.html" data-type="entity-link" >DynamicTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicTableModule-54caabbc8e96ad70b65718cafab882d61265573a29ac238182158cf59d9b1022a69348c3c01eaf467828ab00a9d09cbda7003776ef6e673c60b1ec2910073682"' : 'data-target="#xs-components-links-module-DynamicTableModule-54caabbc8e96ad70b65718cafab882d61265573a29ac238182158cf59d9b1022a69348c3c01eaf467828ab00a9d09cbda7003776ef6e673c60b1ec2910073682"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicTableModule-54caabbc8e96ad70b65718cafab882d61265573a29ac238182158cf59d9b1022a69348c3c01eaf467828ab00a9d09cbda7003776ef6e673c60b1ec2910073682"' :
                                            'id="xs-components-links-module-DynamicTableModule-54caabbc8e96ad70b65718cafab882d61265573a29ac238182158cf59d9b1022a69348c3c01eaf467828ab00a9d09cbda7003776ef6e673c60b1ec2910073682"' }>
                                            <li class="link">
                                                <a href="components/DynamicTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DynamicVideoListModule.html" data-type="entity-link" >DynamicVideoListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DynamicVideoListModule-0e1bc0bb0cde401fa7b02edf2c16eb83c0b842bbcb3aeb25c530ecf53c238aebce2d085e7b0fb3b98fe7585b13e07f204a94051c1893f745b74af633490ee4f2"' : 'data-target="#xs-components-links-module-DynamicVideoListModule-0e1bc0bb0cde401fa7b02edf2c16eb83c0b842bbcb3aeb25c530ecf53c238aebce2d085e7b0fb3b98fe7585b13e07f204a94051c1893f745b74af633490ee4f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DynamicVideoListModule-0e1bc0bb0cde401fa7b02edf2c16eb83c0b842bbcb3aeb25c530ecf53c238aebce2d085e7b0fb3b98fe7585b13e07f204a94051c1893f745b74af633490ee4f2"' :
                                            'id="xs-components-links-module-DynamicVideoListModule-0e1bc0bb0cde401fa7b02edf2c16eb83c0b842bbcb3aeb25c530ecf53c238aebce2d085e7b0fb3b98fe7585b13e07f204a94051c1893f745b74af633490ee4f2"' }>
                                            <li class="link">
                                                <a href="components/DynamicVideoListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicVideoListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExternalPdfInputModule.html" data-type="entity-link" >ExternalPdfInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExternalPdfInputModule-e68320a0ba62a7d7572964fd766c75389583d66d102a1e008782ce11393f36089ae9d032dad83552a53a337a120b7506c7c75c4787fd67a8252d396a0af38ba4"' : 'data-target="#xs-components-links-module-ExternalPdfInputModule-e68320a0ba62a7d7572964fd766c75389583d66d102a1e008782ce11393f36089ae9d032dad83552a53a337a120b7506c7c75c4787fd67a8252d396a0af38ba4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExternalPdfInputModule-e68320a0ba62a7d7572964fd766c75389583d66d102a1e008782ce11393f36089ae9d032dad83552a53a337a120b7506c7c75c4787fd67a8252d396a0af38ba4"' :
                                            'id="xs-components-links-module-ExternalPdfInputModule-e68320a0ba62a7d7572964fd766c75389583d66d102a1e008782ce11393f36089ae9d032dad83552a53a337a120b7506c7c75c4787fd67a8252d396a0af38ba4"' }>
                                            <li class="link">
                                                <a href="components/ExternalPdfInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalPdfInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExternalVideoInputModule.html" data-type="entity-link" >ExternalVideoInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExternalVideoInputModule-69d43be03675e7cd2c4f52c85d5b602021ef3ff822428ff3883c18e3d334fda240e4b38cd7b2757c6fb2328f9430c2dc2b17ab2b38e4ed86ecdeecf7b27979bc"' : 'data-target="#xs-components-links-module-ExternalVideoInputModule-69d43be03675e7cd2c4f52c85d5b602021ef3ff822428ff3883c18e3d334fda240e4b38cd7b2757c6fb2328f9430c2dc2b17ab2b38e4ed86ecdeecf7b27979bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExternalVideoInputModule-69d43be03675e7cd2c4f52c85d5b602021ef3ff822428ff3883c18e3d334fda240e4b38cd7b2757c6fb2328f9430c2dc2b17ab2b38e4ed86ecdeecf7b27979bc"' :
                                            'id="xs-components-links-module-ExternalVideoInputModule-69d43be03675e7cd2c4f52c85d5b602021ef3ff822428ff3883c18e3d334fda240e4b38cd7b2757c6fb2328f9430c2dc2b17ab2b38e4ed86ecdeecf7b27979bc"' }>
                                            <li class="link">
                                                <a href="components/ExternalVideoInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalVideoInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExternalVideoPreviewModule.html" data-type="entity-link" >ExternalVideoPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExternalVideoPreviewModule-1c14718a2a3e51dd6ba69f8d5adfe2c79005f6451c4408a61947a952cdc04289b36841f6f773fa8a8608023f40cd82f59894fd124c3a3a7153929337965d2e77"' : 'data-target="#xs-components-links-module-ExternalVideoPreviewModule-1c14718a2a3e51dd6ba69f8d5adfe2c79005f6451c4408a61947a952cdc04289b36841f6f773fa8a8608023f40cd82f59894fd124c3a3a7153929337965d2e77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExternalVideoPreviewModule-1c14718a2a3e51dd6ba69f8d5adfe2c79005f6451c4408a61947a952cdc04289b36841f6f773fa8a8608023f40cd82f59894fd124c3a3a7153929337965d2e77"' :
                                            'id="xs-components-links-module-ExternalVideoPreviewModule-1c14718a2a3e51dd6ba69f8d5adfe2c79005f6451c4408a61947a952cdc04289b36841f6f773fa8a8608023f40cd82f59894fd124c3a3a7153929337965d2e77"' }>
                                            <li class="link">
                                                <a href="components/ExternalVideoPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExternalVideoPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuardPipeModule.html" data-type="entity-link" >GuardPipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-GuardPipeModule-7f390f76ed05596a0598abb40498abfdee78a7911bc9640e755887c56d01cb8de6e7d5554dea3da3daca70f52738555570505e865fe9724aea67be79be1efc97"' : 'data-target="#xs-pipes-links-module-GuardPipeModule-7f390f76ed05596a0598abb40498abfdee78a7911bc9640e755887c56d01cb8de6e7d5554dea3da3daca70f52738555570505e865fe9724aea67be79be1efc97"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-GuardPipeModule-7f390f76ed05596a0598abb40498abfdee78a7911bc9640e755887c56d01cb8de6e7d5554dea3da3daca70f52738555570505e865fe9724aea67be79be1efc97"' :
                                            'id="xs-pipes-links-module-GuardPipeModule-7f390f76ed05596a0598abb40498abfdee78a7911bc9640e755887c56d01cb8de6e7d5554dea3da3daca70f52738555570505e865fe9724aea67be79be1efc97"' }>
                                            <li class="link">
                                                <a href="pipes/GuardPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuardPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImageInputModule.html" data-type="entity-link" >ImageInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ImageInputModule-85875502fda38724787d19a683b24ed195b699a6b931f25cb092d842993ca51ab31e07e17fec962839b67caae11b01ed5d93aabd1e15b26c23edc2c7d811edd4"' : 'data-target="#xs-components-links-module-ImageInputModule-85875502fda38724787d19a683b24ed195b699a6b931f25cb092d842993ca51ab31e07e17fec962839b67caae11b01ed5d93aabd1e15b26c23edc2c7d811edd4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ImageInputModule-85875502fda38724787d19a683b24ed195b699a6b931f25cb092d842993ca51ab31e07e17fec962839b67caae11b01ed5d93aabd1e15b26c23edc2c7d811edd4"' :
                                            'id="xs-components-links-module-ImageInputModule-85875502fda38724787d19a683b24ed195b699a6b931f25cb092d842993ca51ab31e07e17fec962839b67caae11b01ed5d93aabd1e15b26c23edc2c7d811edd4"' }>
                                            <li class="link">
                                                <a href="components/ImageInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImagePreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagePreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link" >ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-96f833ecb5032f2460dfb4e11ecaa90342a44a4e6fbd786349c3996f1ebd0d9e848c1a46914f343497c494b72c5fd258387ec01198ba84ab0f6edb3b1bf540a4"' : 'data-target="#xs-components-links-module-ModalModule-96f833ecb5032f2460dfb4e11ecaa90342a44a4e6fbd786349c3996f1ebd0d9e848c1a46914f343497c494b72c5fd258387ec01198ba84ab0f6edb3b1bf540a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-96f833ecb5032f2460dfb4e11ecaa90342a44a4e6fbd786349c3996f1ebd0d9e848c1a46914f343497c494b72c5fd258387ec01198ba84ab0f6edb3b1bf540a4"' :
                                            'id="xs-components-links-module-ModalModule-96f833ecb5032f2460dfb4e11ecaa90342a44a4e6fbd786349c3996f1ebd0d9e848c1a46914f343497c494b72c5fd258387ec01198ba84ab0f6edb3b1bf540a4"' }>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModuloModule.html" data-type="entity-link" >ModuloModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModuloModule-4d80388d4812a1caaa57b86248f41eedcc3bae536c4323f5c313db1d2a10488ff8ae5a2bb189ba9c490414c91d94e01263e8ca4fda4a8faf5647eab4942ef119"' : 'data-target="#xs-components-links-module-ModuloModule-4d80388d4812a1caaa57b86248f41eedcc3bae536c4323f5c313db1d2a10488ff8ae5a2bb189ba9c490414c91d94e01263e8ca4fda4a8faf5647eab4942ef119"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModuloModule-4d80388d4812a1caaa57b86248f41eedcc3bae536c4323f5c313db1d2a10488ff8ae5a2bb189ba9c490414c91d94e01263e8ca4fda4a8faf5647eab4942ef119"' :
                                            'id="xs-components-links-module-ModuloModule-4d80388d4812a1caaa57b86248f41eedcc3bae536c4323f5c313db1d2a10488ff8ae5a2bb189ba9c490414c91d94e01263e8ca4fda4a8faf5647eab4942ef119"' }>
                                            <li class="link">
                                                <a href="components/CreateModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateModuloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListModuloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateModuloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModuloRoutingModule.html" data-type="entity-link" >ModuloRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrgaosModule.html" data-type="entity-link" >OrgaosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrgaosModule-51cbfa413a93551aa6e7e4416fc019b78f19e7d0c09998e144bb69e3d1c559e405c442fe3a0727bf5aa1c2c6bdc5eddeb9155a7eccac2c00038b3d85fecc5e5e"' : 'data-target="#xs-components-links-module-OrgaosModule-51cbfa413a93551aa6e7e4416fc019b78f19e7d0c09998e144bb69e3d1c559e405c442fe3a0727bf5aa1c2c6bdc5eddeb9155a7eccac2c00038b3d85fecc5e5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrgaosModule-51cbfa413a93551aa6e7e4416fc019b78f19e7d0c09998e144bb69e3d1c559e405c442fe3a0727bf5aa1c2c6bdc5eddeb9155a7eccac2c00038b3d85fecc5e5e"' :
                                            'id="xs-components-links-module-OrgaosModule-51cbfa413a93551aa6e7e4416fc019b78f19e7d0c09998e144bb69e3d1c559e405c442fe3a0727bf5aa1c2c6bdc5eddeb9155a7eccac2c00038b3d85fecc5e5e"' }>
                                            <li class="link">
                                                <a href="components/CreateOrgaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateOrgaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListOrgaosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListOrgaosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrgaosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrgaosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateOrgaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateOrgaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrgaosRoutingModule.html" data-type="entity-link" >OrgaosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaginatorModule.html" data-type="entity-link" >PaginatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaginatorModule-e95d372d7e6029715b246d1d654b7fabb101c93987a898bc2b02591e883c2879dab6717c41f0a7f53db6283193e21add9f192e1d606a03d96288dbf91403268d"' : 'data-target="#xs-components-links-module-PaginatorModule-e95d372d7e6029715b246d1d654b7fabb101c93987a898bc2b02591e883c2879dab6717c41f0a7f53db6283193e21add9f192e1d606a03d96288dbf91403268d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaginatorModule-e95d372d7e6029715b246d1d654b7fabb101c93987a898bc2b02591e883c2879dab6717c41f0a7f53db6283193e21add9f192e1d606a03d96288dbf91403268d"' :
                                            'id="xs-components-links-module-PaginatorModule-e95d372d7e6029715b246d1d654b7fabb101c93987a898bc2b02591e883c2879dab6717c41f0a7f53db6283193e21add9f192e1d606a03d96288dbf91403268d"' }>
                                            <li class="link">
                                                <a href="components/PaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PdfInputModule.html" data-type="entity-link" >PdfInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PdfInputModule-df311ffd5a691b141204438594c9f99782c95915bda0486110b80b9f28ccdb19000894e3a98076a7059f72654dd0f6a0d08e27e85103ca050d0d50b01471371b"' : 'data-target="#xs-components-links-module-PdfInputModule-df311ffd5a691b141204438594c9f99782c95915bda0486110b80b9f28ccdb19000894e3a98076a7059f72654dd0f6a0d08e27e85103ca050d0d50b01471371b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PdfInputModule-df311ffd5a691b141204438594c9f99782c95915bda0486110b80b9f28ccdb19000894e3a98076a7059f72654dd0f6a0d08e27e85103ca050d0d50b01471371b"' :
                                            'id="xs-components-links-module-PdfInputModule-df311ffd5a691b141204438594c9f99782c95915bda0486110b80b9f28ccdb19000894e3a98076a7059f72654dd0f6a0d08e27e85103ca050d0d50b01471371b"' }>
                                            <li class="link">
                                                <a href="components/PdfInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PdfModule.html" data-type="entity-link" >PdfModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PdfModule-87f5ea6538bca2ee41eb51eb320d43789cbd1053a3965eefdcd634292abb00f3414114bc3a4b7db06ee44ee09482187e0f455e3e1878bad016d9c4c3990a2e60"' : 'data-target="#xs-components-links-module-PdfModule-87f5ea6538bca2ee41eb51eb320d43789cbd1053a3965eefdcd634292abb00f3414114bc3a4b7db06ee44ee09482187e0f455e3e1878bad016d9c4c3990a2e60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PdfModule-87f5ea6538bca2ee41eb51eb320d43789cbd1053a3965eefdcd634292abb00f3414114bc3a4b7db06ee44ee09482187e0f455e3e1878bad016d9c4c3990a2e60"' :
                                            'id="xs-components-links-module-PdfModule-87f5ea6538bca2ee41eb51eb320d43789cbd1053a3965eefdcd634292abb00f3414114bc3a4b7db06ee44ee09482187e0f455e3e1878bad016d9c4c3990a2e60"' }>
                                            <li class="link">
                                                <a href="components/CreatePdfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePdfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkPdfModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkPdfModuloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPdfCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPdfCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPdfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPdfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatePdfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePdfComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PdfPreviewModule.html" data-type="entity-link" >PdfPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PdfPreviewModule-c7caaad312084371cd82c021ec28de6b0f75cfde818be65638f942daa60b4f24083d9f33058dfce081eeed8e139b295399d42697cbda3e7ab9c4494ca626af49"' : 'data-target="#xs-components-links-module-PdfPreviewModule-c7caaad312084371cd82c021ec28de6b0f75cfde818be65638f942daa60b4f24083d9f33058dfce081eeed8e139b295399d42697cbda3e7ab9c4494ca626af49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PdfPreviewModule-c7caaad312084371cd82c021ec28de6b0f75cfde818be65638f942daa60b4f24083d9f33058dfce081eeed8e139b295399d42697cbda3e7ab9c4494ca626af49"' :
                                            'id="xs-components-links-module-PdfPreviewModule-c7caaad312084371cd82c021ec28de6b0f75cfde818be65638f942daa60b4f24083d9f33058dfce081eeed8e139b295399d42697cbda3e7ab9c4494ca626af49"' }>
                                            <li class="link">
                                                <a href="components/PdfPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PdfRoutingModule.html" data-type="entity-link" >PdfRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionModule.html" data-type="entity-link" >PermissionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PermissionModule-953f5460715381015382d5a3eb3247049739dd08a051b22525f141a1b68428e347c37d75a6c85b7308144297b3c6f423735b7456ec44a2a7a2fffb60627c33de"' : 'data-target="#xs-components-links-module-PermissionModule-953f5460715381015382d5a3eb3247049739dd08a051b22525f141a1b68428e347c37d75a6c85b7308144297b3c6f423735b7456ec44a2a7a2fffb60627c33de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PermissionModule-953f5460715381015382d5a3eb3247049739dd08a051b22525f141a1b68428e347c37d75a6c85b7308144297b3c6f423735b7456ec44a2a7a2fffb60627c33de"' :
                                            'id="xs-components-links-module-PermissionModule-953f5460715381015382d5a3eb3247049739dd08a051b22525f141a1b68428e347c37d75a6c85b7308144297b3c6f423735b7456ec44a2a7a2fffb60627c33de"' }>
                                            <li class="link">
                                                <a href="components/CreatePermissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePermissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPermissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPermissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PermissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatePermissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePermissionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionRoutingModule.html" data-type="entity-link" >PermissionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PosicaoModule.html" data-type="entity-link" >PosicaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PosicaoModule-653eee4a4341d0868040e86d7cf64a6df08e101bde3c88ad64052c50fc520cdae5f06c4e843272487c04f798b37732f13868cc78094d1b77616ec52eeff88ee5"' : 'data-target="#xs-components-links-module-PosicaoModule-653eee4a4341d0868040e86d7cf64a6df08e101bde3c88ad64052c50fc520cdae5f06c4e843272487c04f798b37732f13868cc78094d1b77616ec52eeff88ee5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PosicaoModule-653eee4a4341d0868040e86d7cf64a6df08e101bde3c88ad64052c50fc520cdae5f06c4e843272487c04f798b37732f13868cc78094d1b77616ec52eeff88ee5"' :
                                            'id="xs-components-links-module-PosicaoModule-653eee4a4341d0868040e86d7cf64a6df08e101bde3c88ad64052c50fc520cdae5f06c4e843272487c04f798b37732f13868cc78094d1b77616ec52eeff88ee5"' }>
                                            <li class="link">
                                                <a href="components/CreatePosicaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePosicaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPosicaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPosicaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PosicaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PosicaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatePosicaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePosicaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PosicaoRoutingModule.html" data-type="entity-link" >PosicaoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProgressBarModule.html" data-type="entity-link" >ProgressBarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProgressBarModule-8e9758a54b33b4425c35b185d516a3e9707b09462187b28b49a5c40e69936edc343cd00cdd8fdbd91f3ad070375234b7a276a3c147702335c00f592f9adc22c3"' : 'data-target="#xs-components-links-module-ProgressBarModule-8e9758a54b33b4425c35b185d516a3e9707b09462187b28b49a5c40e69936edc343cd00cdd8fdbd91f3ad070375234b7a276a3c147702335c00f592f9adc22c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProgressBarModule-8e9758a54b33b4425c35b185d516a3e9707b09462187b28b49a5c40e69936edc343cd00cdd8fdbd91f3ad070375234b7a276a3c147702335c00f592f9adc22c3"' :
                                            'id="xs-components-links-module-ProgressBarModule-8e9758a54b33b4425c35b185d516a3e9707b09462187b28b49a5c40e69936edc343cd00cdd8fdbd91f3ad070375234b7a276a3c147702335c00f592f9adc22c3"' }>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProvaModule.html" data-type="entity-link" >ProvaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProvaModule-747f1f6a70b9629cf3e8a430bf6f690b7b626700ea233180b43465f40183803bc896cb3bd085c1f73e06028e035d8ae097c6a0e78f36935d4211b1951e0eaec2"' : 'data-target="#xs-components-links-module-ProvaModule-747f1f6a70b9629cf3e8a430bf6f690b7b626700ea233180b43465f40183803bc896cb3bd085c1f73e06028e035d8ae097c6a0e78f36935d4211b1951e0eaec2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProvaModule-747f1f6a70b9629cf3e8a430bf6f690b7b626700ea233180b43465f40183803bc896cb3bd085c1f73e06028e035d8ae097c6a0e78f36935d4211b1951e0eaec2"' :
                                            'id="xs-components-links-module-ProvaModule-747f1f6a70b9629cf3e8a430bf6f690b7b626700ea233180b43465f40183803bc896cb3bd085c1f73e06028e035d8ae097c6a0e78f36935d4211b1951e0eaec2"' }>
                                            <li class="link">
                                                <a href="components/CreateProvaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProvaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkProvaModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkProvaModuloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListProvaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListProvaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreviewModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviewModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProvaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProvaItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvaItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectQuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectQuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectableProvaListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectableProvaListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateProvaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateProvaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProvaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProvaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProvaRoutingModule.html" data-type="entity-link" >ProvaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QuestaoModule.html" data-type="entity-link" >QuestaoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuestaoModule-481cc539792d2cb31de81bd4003f3b9f115e529323e8dec0cb7fa6d40553bea9f0a8b714bd8e95ff1415448fc27b92b60cbac9c521bafa730e8a177b2b79bbe5"' : 'data-target="#xs-components-links-module-QuestaoModule-481cc539792d2cb31de81bd4003f3b9f115e529323e8dec0cb7fa6d40553bea9f0a8b714bd8e95ff1415448fc27b92b60cbac9c521bafa730e8a177b2b79bbe5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestaoModule-481cc539792d2cb31de81bd4003f3b9f115e529323e8dec0cb7fa6d40553bea9f0a8b714bd8e95ff1415448fc27b92b60cbac9c521bafa730e8a177b2b79bbe5"' :
                                            'id="xs-components-links-module-QuestaoModule-481cc539792d2cb31de81bd4003f3b9f115e529323e8dec0cb7fa6d40553bea9f0a8b714bd8e95ff1415448fc27b92b60cbac9c521bafa730e8a177b2b79bbe5"' }>
                                            <li class="link">
                                                <a href="components/CreateQuestaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateQuestaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetSolvedByTrainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetSolvedByTrainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListQuestaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListQuestaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QualifierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QualifierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestaoItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestaoItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchQuestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectToTrainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectToTrainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectableQuestaoListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectableQuestaoListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolveTrainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolveTrainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateQuestaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateQuestaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewQuestaoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewQuestaoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestaoRoutingModule.html" data-type="entity-link" >QuestaoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResumoModule.html" data-type="entity-link" >ResumoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResumoModule-65f3d1f286281f18867a0ffea0845dea425e33e0d630093296eaaaac5da5f301fa53b765a65f30ecc41a56602e3279ca6fd1a8d75ff3136ed01870567f8d5433"' : 'data-target="#xs-components-links-module-ResumoModule-65f3d1f286281f18867a0ffea0845dea425e33e0d630093296eaaaac5da5f301fa53b765a65f30ecc41a56602e3279ca6fd1a8d75ff3136ed01870567f8d5433"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResumoModule-65f3d1f286281f18867a0ffea0845dea425e33e0d630093296eaaaac5da5f301fa53b765a65f30ecc41a56602e3279ca6fd1a8d75ff3136ed01870567f8d5433"' :
                                            'id="xs-components-links-module-ResumoModule-65f3d1f286281f18867a0ffea0845dea425e33e0d630093296eaaaac5da5f301fa53b765a65f30ecc41a56602e3279ca6fd1a8d75ff3136ed01870567f8d5433"' }>
                                            <li class="link">
                                                <a href="components/CreateResumoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateResumoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListResumoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListResumoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateResumoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateResumoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumoRoutingModule.html" data-type="entity-link" >ResumoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-bab18cb5717c380a5cc0c413498dc1723e506c6ae5d70f31981d05a68881d831aea8d3d794959456de180e842a2cc133f534ef81fa5d3cc6c3e0a1148fa8724c"' : 'data-target="#xs-components-links-module-RolesModule-bab18cb5717c380a5cc0c413498dc1723e506c6ae5d70f31981d05a68881d831aea8d3d794959456de180e842a2cc133f534ef81fa5d3cc6c3e0a1148fa8724c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-bab18cb5717c380a5cc0c413498dc1723e506c6ae5d70f31981d05a68881d831aea8d3d794959456de180e842a2cc133f534ef81fa5d3cc6c3e0a1148fa8724c"' :
                                            'id="xs-components-links-module-RolesModule-bab18cb5717c380a5cc0c413498dc1723e506c6ae5d70f31981d05a68881d831aea8d3d794959456de180e842a2cc133f534ef81fa5d3cc6c3e0a1148fa8724c"' }>
                                            <li class="link">
                                                <a href="components/CreateRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateRoleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link" >RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SafePipeModule.html" data-type="entity-link" >SafePipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SafePipeModule-3f387fc538d740e0859dee91b029df0c061651e14909ece63a828a4be78aba7a231ff342f1ee9c9f323471177252f3ed55e2c8e3c08faee95fa8a445a3f24f1f"' : 'data-target="#xs-pipes-links-module-SafePipeModule-3f387fc538d740e0859dee91b029df0c061651e14909ece63a828a4be78aba7a231ff342f1ee9c9f323471177252f3ed55e2c8e3c08faee95fa8a445a3f24f1f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SafePipeModule-3f387fc538d740e0859dee91b029df0c061651e14909ece63a828a4be78aba7a231ff342f1ee9c9f323471177252f3ed55e2c8e3c08faee95fa8a445a3f24f1f"' :
                                            'id="xs-pipes-links-module-SafePipeModule-3f387fc538d740e0859dee91b029df0c061651e14909ece63a828a4be78aba7a231ff342f1ee9c9f323471177252f3ed55e2c8e3c08faee95fa8a445a3f24f1f"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchTableModule.html" data-type="entity-link" >SearchTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchTableModule-086c6b3bee3f551f2c901b1e7e39f5844dc0d4bc035ae028664432bb13d666ff46988e36ee69345d4d4fd2471f52836ed8995c9a96d2eb598414b11db6e1cb16"' : 'data-target="#xs-components-links-module-SearchTableModule-086c6b3bee3f551f2c901b1e7e39f5844dc0d4bc035ae028664432bb13d666ff46988e36ee69345d4d4fd2471f52836ed8995c9a96d2eb598414b11db6e1cb16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchTableModule-086c6b3bee3f551f2c901b1e7e39f5844dc0d4bc035ae028664432bb13d666ff46988e36ee69345d4d4fd2471f52836ed8995c9a96d2eb598414b11db6e1cb16"' :
                                            'id="xs-components-links-module-SearchTableModule-086c6b3bee3f551f2c901b1e7e39f5844dc0d4bc035ae028664432bb13d666ff46988e36ee69345d4d4fd2471f52836ed8995c9a96d2eb598414b11db6e1cb16"' }>
                                            <li class="link">
                                                <a href="components/SearchTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrucanteStringPipeModule.html" data-type="entity-link" >TrucanteStringPipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TrucanteStringPipeModule-bb1130749b95c08ceb637b8c81207b133ed4637b5e6cf5a8355ccaf681fb6211269aea6d0608c5ef83771337973d950f1dc2789789a24d43ea30e9a668ee55f5"' : 'data-target="#xs-pipes-links-module-TrucanteStringPipeModule-bb1130749b95c08ceb637b8c81207b133ed4637b5e6cf5a8355ccaf681fb6211269aea6d0608c5ef83771337973d950f1dc2789789a24d43ea30e9a668ee55f5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TrucanteStringPipeModule-bb1130749b95c08ceb637b8c81207b133ed4637b5e6cf5a8355ccaf681fb6211269aea6d0608c5ef83771337973d950f1dc2789789a24d43ea30e9a668ee55f5"' :
                                            'id="xs-pipes-links-module-TrucanteStringPipeModule-bb1130749b95c08ceb637b8c81207b133ed4637b5e6cf5a8355ccaf681fb6211269aea6d0608c5ef83771337973d950f1dc2789789a24d43ea30e9a668ee55f5"' }>
                                            <li class="link">
                                                <a href="pipes/TrucanteStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrucanteStringPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-4e915f3a320b5bb6dcbb3a82ea7ed3ca6502d052a9f5d0a93602a77e9b29386665b1321ad41c02a5d48616628c03f937cd65a351c26fc07c9e91436cb123cfdf"' : 'data-target="#xs-components-links-module-UserModule-4e915f3a320b5bb6dcbb3a82ea7ed3ca6502d052a9f5d0a93602a77e9b29386665b1321ad41c02a5d48616628c03f937cd65a351c26fc07c9e91436cb123cfdf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-4e915f3a320b5bb6dcbb3a82ea7ed3ca6502d052a9f5d0a93602a77e9b29386665b1321ad41c02a5d48616628c03f937cd65a351c26fc07c9e91436cb123cfdf"' :
                                            'id="xs-components-links-module-UserModule-4e915f3a320b5bb6dcbb3a82ea7ed3ca6502d052a9f5d0a93602a77e9b29386665b1321ad41c02a5d48616628c03f937cd65a351c26fc07c9e91436cb123cfdf"' }>
                                            <li class="link">
                                                <a href="components/ListUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VideoInputModule.html" data-type="entity-link" >VideoInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VideoInputModule-844cd20b71c126ea7d3bff9a2ba0e37f42c3a02f14c8e9380b9f0c7f10ef818d235489c93dc217f7634c6b4361ae176584061fb9dea2a67c5ce1f0d0ceb60acb"' : 'data-target="#xs-components-links-module-VideoInputModule-844cd20b71c126ea7d3bff9a2ba0e37f42c3a02f14c8e9380b9f0c7f10ef818d235489c93dc217f7634c6b4361ae176584061fb9dea2a67c5ce1f0d0ceb60acb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VideoInputModule-844cd20b71c126ea7d3bff9a2ba0e37f42c3a02f14c8e9380b9f0c7f10ef818d235489c93dc217f7634c6b4361ae176584061fb9dea2a67c5ce1f0d0ceb60acb"' :
                                            'id="xs-components-links-module-VideoInputModule-844cd20b71c126ea7d3bff9a2ba0e37f42c3a02f14c8e9380b9f0c7f10ef818d235489c93dc217f7634c6b4361ae176584061fb9dea2a67c5ce1f0d0ceb60acb"' }>
                                            <li class="link">
                                                <a href="components/VideoInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VideoModule.html" data-type="entity-link" >VideoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VideoModule-5cb8a6d21b638cde3d1cd217d2ea134cfe7f97be0001d43a3d07c0e6215230c8f1c60ba94ee61bb83811220183d11287de7381570d1e27a26bf9dc3206e78c4b"' : 'data-target="#xs-components-links-module-VideoModule-5cb8a6d21b638cde3d1cd217d2ea134cfe7f97be0001d43a3d07c0e6215230c8f1c60ba94ee61bb83811220183d11287de7381570d1e27a26bf9dc3206e78c4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VideoModule-5cb8a6d21b638cde3d1cd217d2ea134cfe7f97be0001d43a3d07c0e6215230c8f1c60ba94ee61bb83811220183d11287de7381570d1e27a26bf9dc3206e78c4b"' :
                                            'id="xs-components-links-module-VideoModule-5cb8a6d21b638cde3d1cd217d2ea134cfe7f97be0001d43a3d07c0e6215230c8f1c60ba94ee61bb83811220183d11287de7381570d1e27a26bf9dc3206e78c4b"' }>
                                            <li class="link">
                                                <a href="components/CreateVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateVideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkVideoModuloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkVideoModuloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListVideoCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListVideoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListVideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateVideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WatcherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatcherComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VideoRoutingModule.html" data-type="entity-link" >VideoRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BaseListComponent-1.html" data-type="entity-link" >BaseListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapsComponent.html" data-type="entity-link" >MapsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/RegisterDirective.html" data-type="entity-link" >RegisterDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomAsyncValidatorss.html" data-type="entity-link" >CustomAsyncValidatorss</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlternativaService.html" data-type="entity-link" >AlternativaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AreaService.html" data-type="entity-link" >AreaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssuntoService.html" data-type="entity-link" >AssuntoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BancaService.html" data-type="entity-link" >BancaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConcursoService.html" data-type="entity-link" >ConcursoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CorrecaoService.html" data-type="entity-link" >CorrecaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CursoService.html" data-type="entity-link" >CursoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DisciplinaService.html" data-type="entity-link" >DisciplinaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpErrorHandlerService.html" data-type="entity-link" >HttpErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListTableService.html" data-type="entity-link" >ListTableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModuloService.html" data-type="entity-link" >ModuloService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrgaoService.html" data-type="entity-link" >OrgaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PdfService.html" data-type="entity-link" >PdfService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionService.html" data-type="entity-link" >PermissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PosicaoService.html" data-type="entity-link" >PosicaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProvaService.html" data-type="entity-link" >ProvaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestaoService.html" data-type="entity-link" >QuestaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumoService.html" data-type="entity-link" >ResumoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesPermissionsService.html" data-type="entity-link" >RolesPermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideoService.html" data-type="entity-link" >VideoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/AuthResponseInterceptor.html" data-type="entity-link" >AuthResponseInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/DebugRequest.html" data-type="entity-link" >DebugRequest</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorHandlerInterceptor.html" data-type="entity-link" >ErrorHandlerInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Alternativa.html" data-type="entity-link" >Alternativa</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aluno.html" data-type="entity-link" >Aluno</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Area.html" data-type="entity-link" >Area</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Assunto.html" data-type="entity-link" >Assunto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Banca.html" data-type="entity-link" >Banca</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseItem.html" data-type="entity-link" >BaseItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseList.html" data-type="entity-link" >BaseList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseSelectableList.html" data-type="entity-link" >BaseSelectableList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseUpdate.html" data-type="entity-link" >BaseUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseView.html" data-type="entity-link" >BaseView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Concurso.html" data-type="entity-link" >Concurso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Correcao.html" data-type="entity-link" >Correcao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Curso.html" data-type="entity-link" >Curso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Disciplina.html" data-type="entity-link" >Disciplina</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/List.html" data-type="entity-link" >List</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/List-1.html" data-type="entity-link" >List</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/listLinks.html" data-type="entity-link" >listLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/listLinks-1.html" data-type="entity-link" >listLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta-1.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Modulo.html" data-type="entity-link" >Modulo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Orgao.html" data-type="entity-link" >Orgao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pdf.html" data-type="entity-link" >Pdf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Permissions.html" data-type="entity-link" >Permissions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Posicao.html" data-type="entity-link" >Posicao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Professor.html" data-type="entity-link" >Professor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Prova.html" data-type="entity-link" >Prova</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Questao.html" data-type="entity-link" >Questao</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Resumo.html" data-type="entity-link" >Resumo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Roles.html" data-type="entity-link" >Roles</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link" >RouteInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Video.html" data-type="entity-link" >Video</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});