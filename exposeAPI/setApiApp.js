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
    editorReady: async function editorReady(_editorSDK, appDefinitionId) {
        const loadedButton = {
            'type': 'DESKTOP',
            'id': 'comp-jcueepln'
        }
        editorSDK = _editorSDK;
        await editorSDK.editor.setAppAPI(appDefinitionId, {updateButtonLabel});
        return await updateButtonLabel(loadedButton, 'Loaded');
    },
    exports: {updateButtonLabel}
};
