'use strict';

let app;

function editorReady(editorSDK) {
        console.log(editorSDK);
}


function onEvent(event) {
    switch (event.eventType) {
        default:
            break;
    }
}

function getAppManifest() {
    console.log('manifest loaded');
}





module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};