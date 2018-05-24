let buttonClick;


function initAppForPage() {
    console.log("initAppForPage");
}

function createControllers(controllerConfigs) {
    console.log("controllerConfigs", controllerConfigs);
    return controllerConfigs.map(controllerConfig => {
        const compId = controllerConfig.config.compId;
        console.log("compId", compId);
        return {
            exports: {
                onTestButtonClicked: function (func) {
                    buttonClick = func
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
        buttonClick: function () {
            buttonClick();
        }
    }
};