'use strict';

let app;
var _port;
var _editorSDK;

async function editorReady(_editorSDK, _appDefinitionId) {
    console.log(_editorSDK);
    const pageRef = await editorSDK.pages.getCurrent();
    self.sdk = _editorSDK;

    app = new App(_editorSDK, _appDefinitionId, pageRef);

    app.install();
}

function getAppManifest() {
    return { controllersStageData: {
            controllerWithExportsAsObject: {
                default: {
                    connections: {
                        buttonrole: {
                            gfpp: {
                                desktop: {
                                    mainAction1:{ actionId: 'EDIT', label: 'Option 1' },
                                    mainAction2:{ actionId: 'MANAGE', label: 'Option 2' },
                                    iconButtons: {
                                        layout: {actionId: 'LAYOUT_PANEL'},
                                    },
                                    helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                                },
                                mobile: {
                                    iconButtons: {
                                        textSize: 'HIDE'
                                    },
                                    helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                                }
                            },
                            behavior: {
                                rotatable: false,
                                duplicatable: false,
                                toggleShowOnAllPagesEnabled: false,
                                pinnable: false,
                                resizable: false,
                            },
                        }
                    },
                    visibility: 'DEV'
                }
            }
        }
    };
}

function onEvent(event) {
    const componentRef = event.eventPayload.componentRef;
    const eventId = event.eventPayload && event.eventPayload.id;
    switch (event.eventType) {
        case 'componentGfppClicked':
            switch (eventId) {
                case 'EDIT':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'Click me baby one more time'}});
                    break;
                case 'MANAGE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'No time to explain, click me now'}});
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