'use strict';

let editorSDK;

async function updateButtonLabel(buttonRef, label) {
    return await editorSDK.document.components.data.update('', {
        componentRef: buttonRef,
        data: {label}
    });
}


module.exports = {
    onEvent: () => {},
    getAppManifest: () => ({}),
    editorReady:  () => {},

};
