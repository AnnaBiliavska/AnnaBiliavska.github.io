let openPopUp;
const subscribers = [];

function initAppForPage() {
    console.log("initAppForPage");
}

var position =  {origin: Wix.WindowOrigin.FIXED, placement: Wix.WindowPlacement.CENTER};
var onClose = function(message) { console.log("popup closed", message) };

function openPopUp(url) {
    Wix.openPopup(url, 400, 400, position, onClose);
}


function createControllers(controllerConfigs) {
    console.log("controllerConfigs", controllerConfigs);
    return controllerConfigs.map(controllerConfig => {
        const compId = controllerConfig.config.compId;
        console.log("compId", compId);
        return {
            exports: {
                openPopUp: function (url) {
                    if (_.isFunction(openPopUp)) {
                        openPopUp(url);
                    } else {
                        console.log("Error");
                    }
                }
            },
            pageReady: _.noop
        }
    });
}


module.exports = {
    initAppForPage,
    createControllers,
    exports: {
        registerOpenPopUpFunction: function (func) {
            openPopUp = func
        }
    }
};