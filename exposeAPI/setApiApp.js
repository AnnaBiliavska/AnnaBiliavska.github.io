'use strict';

let editorSDK;

async function sendLog() {
    return await console.log("Test best");
}

module.exports = {
    onEvent: () => {},
    getAppManifest: () => ({}),
    editorReady: async function editorReady(_editorSDK, appDefinitionId) {
        editorSDK = _editorSDK;
        await editorSDK.editor.setAppAPI(appDefinitionId, {sendLog});
        return await sendLog();
    },
    exports: {sendLog}
};