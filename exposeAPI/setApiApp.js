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
            self.editorSDK = _editorSDK;
            await _editorSDK.editor.setAppAPI(appDefinitionId, {sendLog});
            return await sendLog("Set API");
        },
        exports: {sendLog}
    };
}());


