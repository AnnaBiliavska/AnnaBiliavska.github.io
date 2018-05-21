'use strict';
function getAppManifest() {
    console.log('test');
    return { controllersStageData: {
            controllerWithExportsAsObject: {
                default: {
                    connections: {
                        buttonrole: {
                            gfpp: {
                                desktop: {
                                    mainAction1:{ actionId: 'EDIT', label: 'test' },
                                    mainAction2:{ actionId: 'MANAGE', label: 'open Modal Panel' },
                                    iconButtons: {
                                        layout: {actionId: 'LAYOUT_PANEL'},
                                        design: {actionId: 'DESIGN_PANEL'},
                                    },
                                    helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                                },
                                mobile: {
                                    mainAction1:{ actionId: 'MANAGE', label: 'Manage This Mobile' },
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
                        },
                        imagerole: {
                            gfpp: {
                                desktop: {
                                    mainAction1:{ actionId: 'EDIT', label: 'image' },
                                    helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                                },
                                mobile: {
                                    mainAction1:{ actionId: 'MANAGE', label: 'Manage This Mobile' },
                                    iconButtons: {
                                        textSize: 'HIDE'
                                    },
                                    helpId: 'bc3c1b91-e9f4-441e-b89e-bb7801fe0b2c'
                                }
                            },
                            behavior: {
                                //toggleShowOnAllPagesEnabled: false,
                                pinnable: false,
                                resizable: true,
                            },
                        }
                    },
                    visibility: 'DEV'
                }
            }
        }
    };
}
var _port;
var _editorSDK;

function editorReady(editorSDK) {
    _editorSDK = editorSDK;
    _editorSDK.application.reloadManifest().then((d)=>console.log("manifest reloaded onEditorReady"));
}


function onEvent(event) {
    const componentRef = event.eventPayload && event.eventPayload.componentRef;
    const eventId = event.eventPayload && event.eventPayload.id;
    console.log(event);
    switch (event.eventType) {
        case 'componentGfppClicked':
            switch (eventId) {
                case 'EDIT':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'edit button'}});
                    console.log("edit button clicked");
                    _editorSDK.application.reloadManifest().then((d)=>console.log("manifest is reloaded"));
                    break;
                case 'MANAGE':
                    _editorSDK.editor.openModalPanel("token", {url: `./settingsPanel.html`});
                    break;
                case 'CROP_PANEL':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'oh yeah'}});
                    break;
                case 'DESIGN_PANEL':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'designnnn'}});
                    break;
                case 'LAYOUT_PANEL':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'layoutttt'}});
                    break;
                case 'TEXT_SIZE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'filterss'}});
                default:
                    break;
            }
            break;
        case 'newVersionIsReady':
            console.log('version');
            _editorSDK.application.reloadManifest().then((d)=>console.log("is reloaded"));
            break;
        case 'someEventType':
            _port.postMessage(event.eventPayload);
            break;
        default:
            break;
    }
}
module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};