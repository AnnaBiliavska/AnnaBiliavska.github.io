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
    await new Promise((res,rej) => setTimeout(rej, 3000));

    return {
        editorReady: editorSDK => {
            return console.log('editorReady');
        },
        getAppManifest: () => {
            return console.log('manifest');
        }
    }
}