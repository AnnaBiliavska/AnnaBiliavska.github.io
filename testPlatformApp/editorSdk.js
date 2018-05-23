'use strict';
module.exports = function () {
    let app;
    let editorSDK;

    async function editorReady(_editorSDK, _appDefinitionId, options) {
        console.log(_editorSDK);
        const pageRef = await _editorSDK.pages.getCurrent();
        self.sdk = _editorSDK;
        self.sdk.info.getUserId().then((userId)=>console.log(userId));

        app = new App(_editorSDK, _appDefinitionId, pageRef);

        if (options.firstInstall) {
            await app.install();
        }
    }

    async function onEvent(event) {
        console.log(event);
        if (app.eventHandlers[event.eventType]) {
            app.eventHandlers[event.eventType].call(app, event.eventPayload);
        }
    }

    function getAppManifest() {
        return {
            controllersStageData: {
                fooBar: {
                    default: {
                        visibility: 'DEV',
                        connections: {
                            buttonrole: {
                                gfpp: {
                                    desktop: {
                                        mainAction1:{ actionId: 'EDIT', label: 'This IS ttt' },
                                        mainAction2:{ actionId: 'MANAGE', label: 'TEST' },
                                    },
                                    mobile: {
                                        mainAction1:{ actionId: 'MANAGE', label: 'Manage This Mobile' },
                                    },
                                },
                                behavior: {
                                    rotatable: false,
                                    duplicatable: true,
                                    toggleShowOnAllPagesEnabled: true,
                                    pinnable: false,
                                    resizable: false,
                                },
                            },
                        }
                    }
                }
            }
        }
    }

    class App {
        constructor(editorSDK, appDefinitionId, pageRef) {
            this.editorSDK = editorSDK;
            this.appDefinitionId = appDefinitionId;
            this.pageRef = pageRef;
            this.components = {};
            this.eventHandlers = {
                "controllerAdded": this.onControllerAdded,
                "controllerSettingsButtonClicked": this.onControllerSettingsButtonClicked,
                "printUser": this.printUserId,
            }
        }

        async connect(controllerRef, componentRef, role) {
            this.editorSDK.controllers.connect('token', {
                controllerRef,
                connectToRef: componentRef,
                role: role,
                isPrimary: true
            });
        }

        async addComponent(compType, data) {
            return this.editorSDK.components.add('token', {
                componentDefinition: {
                    componentType: compType,
                    data: {
                        applicationId: this.appDefinitionId,
                        ...data
                    }
                },
                pageRef: this.pageRef
            });
        }

        async addConnectedComponent(componentType, role, data = {}) {
            const compRef = await this.addComponent(componentType, data);
            const controllerRef = await this.getController();
            await this.connect(controllerRef, compRef, role);
            return compRef;
        }

        async install() {
            await this.addController();
            const buttonRef = await this.addConnectedComponent('wysiwyg.viewer.components.SiteButton', 'buttonrole');
            await this.editorSDK.components.data.update(null, {componentRef: buttonRef, data: {label: 'Test'}});
        }

        async addController() {
            return this.editorSDK.components.add('token', {
                componentDefinition: {
                    componentType: 'platform.components.AppController',
                    data: {
                        applicationId: this.appDefinitionId,
                        controllerType: 'fooBar',
                        name: 'Item'
                    }
                },
                pageRef: this.pageRef
            });
        }

        async onControllerAdded() {
            this.printUserId();

        }

        async onControllerSettingsButtonClicked() {
            /*this.editorSDK.editor.openComponentPanel(null, {
                type: "test",
                //title: "MY PANEL",
                componentRef: {type: "DESKTOP", id: "comp-jghom3vu"},
                //initialData: {a: 1},
                //width: "90%",
                //height: "90%",
                url: "./editorSdk.html",
            });*/
            this.editorSDK.document.save().then(() => console.log("site saved test log")).catch(e => console.log("ERROR: " + e));
        }

        async getController() {
            const componentsRefs = await this.editorSDK.components.getAllComponents();
            const componentsData = await Promise.all(componentsRefs.map(compRef => this.editorSDK.components.data.get(null, {componentRef: compRef})));
            const components = componentsData.map((comp, index) => Object.assign({}, comp, {componentRef: componentsRefs[index]}));
            const controller = components.find(c => c.type === "AppController");
            return controller.componentRef;
        }

        async getComponents() {
            const controllerRef = await this.getController();
            const connectedComponents = await this.editorSDK.controllers.getControllerConnections(null, {controllerRef});
            const connectedComponentsRefs = connectedComponents.map(c => c.componentRef);
            const componentsData = await Promise.all(connectedComponentsRefs.map(compRef => this.editorSDK.components.data.get(null, {componentRef: compRef})));
            const components = connectedComponents.map((comp, index) => Object.assign({}, comp, componentsData[index]));
            return components;
        }

        async getComponentByRole(role) {
            const components = await this.getComponents();
            return components.find(comp => comp.connection.role === role);
        }

        async printComponents() {
            this.editorSDK.components.get()
        }

        async printUserId() {
            return this.editorSDK.info.getUserId().then((userId)=>console.log(userId));
        }


    }
    return {

        editorReady,
        onEvent,
        getAppManifest
    }
}();