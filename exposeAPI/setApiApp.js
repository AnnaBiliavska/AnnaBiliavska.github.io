'use strict';

    let _editorSDK;

    async function sendLog(text) {
        return await console.log(text);
    }

    module.exports = {
        onEvent: () => {
        },
        getAppManifest: () => ({}),
        editorReady: async function editorReady(editorSDK, appDefinitionId) {
            editorSDK = _editorSDK;
            await _editorSDK.editor.setAppAPI(appDefinitionId, {sendLog});
            return await sendLog("Set API");
        },
        exports: {sendLog}
    };



