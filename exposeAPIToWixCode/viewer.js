const mainWidgetId = "1519ae63-416e-f576-d55a-f804d84119db";
// const _ = require("lodash");

let openPopUp;
let navigateToPage;
let refreshApi;
const subscribers = [];

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
                openPopUp: function (url) {
                    if (_.isFunction(openPopUp)) {
                        openPopUp(url);
                    } else {
                        console.log("Error111");
                    }
                },
                navigateToPage: function () {
                    if (_.isFunction(navigateToPage)) {
                        navigateToPage();
                    }
                },
                refreshApi: function () {
                    if (_.isFunction(refreshApi)) {
                        refreshApi();
                    }
                },
                //onEvent: function () {
                //    console.log(event);
                //}
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
        },
        registerNavigate: function (func) {
            navigateToPage = func
        },
        registerRefreshApi: function (func) {
            refreshApi = func
        },
        //fireEvent() {
        //    subscribers.forEach(fn => fn());
        //}
        // fireEvent: function (compId, event) {
        //     console.log(event + " was fired");
        //     const events = {
        //         "play": () => playEventSubscribers[compId].forEach(f => f()),
        //         "pause": () => pauseEventSubscribers[compId].forEach(f => f()),
        //     };
        //     events[event]();
        // }
    }
};