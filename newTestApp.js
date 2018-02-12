'use strict';
var _editorSDK;

function getAppManifest() {
    return {
        controllersStageData: {
            controllerWithExportsAsObject: {
                default: {
                    connections: {
                        role: {
                            behavior: {
                                rotatable: false,
                                toggleShowOnAllPagesEnabled: false,
                            },
                        }
                    }
                }
            }
        }
    }
}

function onEvent(event) {
    if (event === "controllerAdded") {
        console.log(event);
    }
}

function editorReady(editorSDK) {
    _editorSDK = editorSDK;
    var controllerRef;
    const pageRef = editorSDK.pages.getCurrent();
    controllerRef = editorSDK.components.add('token', {
        componentDefinition: {
            componentType: "platform.components.AppController",
            data: {
                type: "AppController",
                applicationId: "1510b05d-d910-c6b4-b985-b7b05be0848e",
                name: "controllerWithExportsAsObject",
                controllerType: "controllerWithExportsAsObject"
            }
        },
        pageRef
    });
}

module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};