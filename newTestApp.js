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
                applicationId: "151294ae-dbdf-1943-4d8c-d6bdadf56ec2",
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