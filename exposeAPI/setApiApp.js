'use strict';

(function() {
    let editorSDK;
    var self=this;

    async function sendLog(text) {
        return await console.log(text);
    }

    module.exports = {
        onEvent: () => {
        },
        getAppManifest: () => ({}),
        editorReady: async function editorReady(_editorSDK, appDefinitionId) {
            self.editorSDK = editorSDK;
            await editorSDK.editor.setAppAPI(appDefinitionId, {sendLog});
            return await sendLog("Set API");
        },
        exports: {sendLog}
    };
}());


