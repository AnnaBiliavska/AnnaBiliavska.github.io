'use strict';

//const logComponent = {type: 'DESKTOP', id: 'comp-jhal97ds'}
const token = 'token'
//let status = ''


/*function updateStatus(editorSDK) {
    editorSDK.components.data.update(token, {
        componentRef: logComponent,
        data: {
            text: `<h2 style="font-size:27px">${status}</h2>`
        }
    })
}*/

module.exports = async() => {
    console.log('initialized');

    return {
        editorReady: async editorSDK => {
            await Promise.reject(new Error('jkdjfkdjak'));
            return console.log('editorReady');
        },
        getAppManifest: () => {
            return console.log('manifest');
        }
    }
}