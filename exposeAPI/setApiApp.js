'use strict';

let editorSDK;

async function sendLog(text) {
    return await console.log(text);
}

module.exports = {
    onEvent: () => {},
    getAppManifest: () => ({}),
    editorReady: async function editorReady(_editorSDK, appDefinitionId) {
        editorSDK = _editorSDK;
        await (function(){editorSDK.editor.setAppAPI(appDefinitionId, {sendLog})}());
        return await (function(){sendLog("Set API")}());
    },
    exports: {sendLog}
};