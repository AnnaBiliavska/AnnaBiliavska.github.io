'use strict';

let app;
var _port;

async function editorReady(_editorSDK, _appDefinitionId, options) {
    console.log(_editorSDK);
    const pageRef = await _editorSDK.pages.getCurrent();
    self.sdk = _editorSDK;

    app = new App(_editorSDK, _appDefinitionId, pageRef);

    if (options.firstInstall) {
        await app.install();
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
                                    mainAction1:{ actionId: 'EDIT', label: 'Option1' },
                                    mainAction2:{ actionId: 'MANAGE', label: 'Option2' },
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

async function onEvent(event) {
    const componentRef = event.eventPayload.componentRef;
    const eventId = event.eventPayload && event.eventPayload.id;
    if (app.eventHandlers[event.eventType]) {
        app.eventHandlers[event.eventType].call(app, event.eventPayload);
    }
    switch (event.eventType) {
        case 'componentGfppClicked':
            switch (eventId) {
                case 'EDIT':
                    self.sdk.components.data.update('token', {componentRef: componentRef, data:{label: 'Click me baby one more time'}});
                    break;
                case 'MANAGE':
                    self.sdk.components.data.update('token', {componentRef: componentRef, data:{label: 'No time to explain, click me now'}});
                    break;
                default:
                    break;
            }
            break;
        case 'someEventType':
            _port.postMessage(event.eventPayload);
            break;
        default:
            break;
    }
}

class App {
        constructor(editorSDK, appDefinitionId, pageRef) {
            this.editorSDK = editorSDK;
            this.appDefinitionId = appDefinitionId;
            this.pageRef = pageRef;
            this.components = {};
            this.eventHandlers = {
                "controllerSettingsButtonClicked": this.onControllerSettingsButtonClicked,
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


        async onControllerSettingsButtonClicked() {
            this.editorSDK.editor.openToolPanel('token', {
                url: './trainingApp.html',width: 372,height: 467}).then(() => {console.log('closed')});
        }

        async getController() {
            const componentsRefs = await this.editorSDK.components.getAllComponents();
            const componentsData = await Promise.all(componentsRefs.map(compRef => this.editorSDK.components.data.get(null, {componentRef: compRef})));
            const components = componentsData.map((comp, index) => Object.assign({}, comp, {componentRef: componentsRefs[index]}));
            const controller = components.find(c => c.type === "AppController");
            return controller.componentRef;
        }
}



module.exports = {
        onEvent: onEvent,
        editorReady: editorReady,
        getAppManifest: getAppManifest
};