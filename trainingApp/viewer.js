let buttonClick;


function initAppForPage() {
    console.log("initAppForPage");
}

function createControllers(controllerConfigs) {
    return controllerConfigs.map(controllerConfig => {
        return {
            exports: {
                onAppButtonClick: function (func) {
                    buttonClick = func
                }
            }
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