const mainWidgetId = "1519ae63-416e-f576-d55a-f804d84119db";
const gluedWidgetId = "151deac1-9052-40e0-58cb-d353e6786208";

// const _ = require("lodash");

let openPopUp;
let navigateToPage;
let getPageTitle;
const handlers = [];
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
                getPageTitle: function () {
                    if (_.isFunction(getPageTitle)) {
                        getPageTitle();
                    }
                    else {
                        console.log("Cannot get title");
                    }
                },
                click: function() {
                    handlers[compId]();
                    console.log("click: " + compId);
                },
                onClick: function(callback) {
                    console.log("OnClick", callback);
                    if (!subscribers[compId]) {
                        subscribers[compId] = [];
                    }
                    subscribers[compId].push(callback)
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
        },
        registerNavigate: function (func) {
            navigateToPage = func
        },
        registerGetTitle: function (func) {
            getPageTitle = func
        },
        onButtonClick: function (compId, callback) {
            console.log("buttonClickHandler", compId);
            handlers[compId] = callback;
        },
        fireEvent: function (compId, event) {
            console.log(event + " was fired");
            const events = {
                "click": () => subscribers[compId].forEach(f => f()),
            };
            events[event]();
        }
    }
};