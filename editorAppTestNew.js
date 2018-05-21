'use strict';

//const logComponent = {type: 'DESKTOP', id: 'comp-jhal97ds'}
const token = 'token';
let app;
//let status = ''


async function installApp(_editorSDK) {
    const pageRef = await _editorSDK.pages.getCurrent();
    self.sdk = _editorSDK;
    self.sdk.info.getUserId().then((userId)=>console.log(userId));

    app = new App(_editorSDK, _appDefinitionId, pageRef);
    app.install();
}

module.exports = () => {
    console.log("start initialization");

    return {
        editorReady: editorSDK => {
            return installApp(editorSDK)
        },
        getAppManifest: () => {
            return {
                controllersStageData: {
                    fooBar: {
                        default: {
                            visibility: 'DEV',
                            connections: {
                                buttonrole: {
                                    gfpp: {
                                        desktop: {
                                            mainAction1:{ actionId: 'EDIT', label: 'Button 1' },
                                            mainAction2:{ actionId: 'MANAGE', label: 'Button 2' },
                                        },
                                        mobile: {
                                            mainAction1:{ actionId: 'MANAGE', label: 'Manage This Mobile' },
                                        },
                                    },
                                    behavior: {
                                        rotatable: false,
                                        duplicatable: false,
                                        toggleShowOnAllPagesEnabled: false,
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
        await this.editorSDK.components.data.update(null, {componentRef: buttonRef, data: {label: 'Test my app'}});
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
        console.log('controller is added');
    }

    async getController() {
        const componentsRefs = await this.editorSDK.components.getAllComponents();
        const componentsData = await Promise.all(componentsRefs.map(compRef => this.editorSDK.components.data.get(null, {componentRef: compRef})));
        const components = componentsData.map((comp, index) => Object.assign({}, comp, {componentRef: componentsRefs[index]}));
        const controller = components.find(c => c.type === "AppController");
        return controller.componentRef;
    }
}