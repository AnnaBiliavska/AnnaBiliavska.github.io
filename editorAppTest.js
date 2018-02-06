'use strict';
function getAppManifest() {
    return { controllersStageData: {
            controllerWithExportsAsObject: {
                default: {
                    connections: {
                        buttonrole: {
                            gfpp: {
                                desktop: {
                                    mainAction1:{ actionId: 'EDIT', label: 'Edit this button' },
                                    mainAction2:{ actionId: 'MANAGE', label: 'Manage This Btn' },
                                    iconButtons: {
                                        layout: {actionId: 'LAYOUT_PANEL'},
                                        design: 'HIDE'
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
                            }
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
}
function onEvent(event) {
    const componentRef = event.eventPayload.componentRef;
    const eventId = event.eventPayload.id;
    switch (event.eventType) {
        case 'componentGfppClicked':
            switch (eventId) {
                case 'EDIT':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'edit button'}});
                    break;
                case 'MANAGE':
                    _editorSDK.components.data.update('token', {componentRef: componentRef, data:{label: 'manage button'}});
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