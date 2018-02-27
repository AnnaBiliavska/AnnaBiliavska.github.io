'use strict';

(function() {
    let sdk;
    var self=this;

    async function sendLog(text) {
        return await console.log(text);
    }

    module.exports = {
        onEvent: () => {
        },
        getAppManifest: () => ({}),
        editorReady: async function editorReady(_editorSDK, appDefinitionId) {
            sdk = _editorSDK;
            self.sdk = sdk;
            await sdk.editor.setAppAPI(appDefinitionId, {sendLog});
            return await sendLog("Set API");
        },
        exports: {sendLog}
    };
}());


