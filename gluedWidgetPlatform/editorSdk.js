'use strict';

let app;

async function editorReady(editorSDK) {
        console.log(editorSDK);
}


async function onEvent(event) {
        console.log(event);
        if (app.eventHandlers[event.eventType]) {
            app.eventHandlers[event.eventType].call(app, event.eventPayload);
        }
}

function getAppManifest() {
        return {}
}





module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};