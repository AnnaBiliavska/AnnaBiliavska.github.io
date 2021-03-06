const mainWidgetId = "1519ae63-416e-f576-d55a-f804d84119db";
const gluedWidgetId = "151deac1-9052-40e0-58cb-d353e6786208";

// const _ = require("lodash");


let openPopUp;
let navigateToPage;
let getPageTitle;
let getNameTpa;
let printUser;
let buttonClick;
let showImage;

function initAppForPage() {
    console.log("initAppForPage111");
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
                getName: function (name) {
                    if (_.isFunction(getNameTpa)) {
                        getNameTpa(name);
                    }
                    else {
                        console.log("Cannot get name");
                    }
                },
                printUser: function (userData) {
                    if (_.isFunction(printUser)) {
                        printUser(userData);
                    }
                    else {
                        console.log("Cannot print");
                    }
                },
                onTestButtonClicked: function (func) {
                    buttonClick = func
                },
                onFormSubmit: function (func) {
                    showImage = func
                },
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
        registerGetName: function (func) {
            getNameTpa = func;
        },
        registerPrintUser: function (func) {
            printUser = func
        },
        buttonClick: function () {
            buttonClick();
        },
        showImage: function (pet) {
            showImage(pet);
        },
    }
};