'use strict';

async function sendLog(text) {
    return await console.log(text);
}

 module.exports = {
    onEvent: () => {},
    getAppManifest: () => ({}),
    editorReady: async function editorReady(editorSDK, appDefinitionId) {
        await editorSDK.editor.setAppAPI(appDefinitionId, {sendLog});
        return await sendLog("Set API");
    },
    exports: {sendLog}
 };
