'use strict';

function getAppManifest() {
    return {};
}

const CONTROLLER_COMP_DEF = {
    type: 'Component',
    skin: 'platform.components.skins.controllerSkin',
    layout: {
        width: 40,
        height: 40,
        x: 20,
        y: 15,
        scale: 1,
        rotationInDegrees: 0,
        fixedPosition: false
    },
    componentType: 'platform.components.AppController',
    data: {
        type: 'AppController',
        applicationId: '1521f22b-3913-f65e-2ac9-00f9e6ae12d3',
        name: 'mockController',
        controllerType: 'mockController'
    },
    metaData: {
        isPreset: false,
        schemaVersion: '1.0',
        isHidden: false
    },
    style: {
        type: 'TopLevelStyle',
        metaData: {
            isPreset: false,
            schemaVersion: '1.0',
            isHidden: false
        },
        style: {
            groups: {},
            properties: {
                'alpha-bg': '1',
                'alpha -bgh': '1',
                'alpha - brd': '1',
                'alpha - brdh': '1',
                'alpha - txt': '1',
                'alpha - txth': '1',
                bg: '#3D9BE9',
                bgh: '#2B689C',
                'boxShadowToggleOn -shd': 'false',
                brd: '#2B689C',
                brdh: '#3D9BE9',
                brw: '0px',
                fnt: 'normal normal normal 14px/1.4em raleway',
                rd: '20px',
                shd: '0 1px 4px rgba(0, 0, 0, 0.6);',
                txt: '#FFFFFF',
                txth: '#FFFFFF'
            },
            propertiesSource: {
                bg: 'value',
                bgh: 'value',
                brd: 'value',
                brdh: 'value',
                brw: 'value',
                fnt: 'value',
                rd: 'value',
                shd: 'value',
                txt: 'value',
                txth: 'value'
            }
        },
        componentClassName: 'platform.components.AppController',
        skin: 'platform.components.skins.controllerSkin'
    }
}

const HOVER_BOX_DEF = {
    'layout': {
        'x': 388,
        'y': 176,
        'fixedPosition': false,
        'width': 284,
        'height': 284,
        'scale': 1,
        'rotationInDegrees': 0
    },
    'modes': {
        'definitions': [
            {
                'modeId': 'comp-jdsrqjla-mode-jdsrqjo4',
                'type': 'DEFAULT',
                'label': 'MODE_LABEL_FROM_PRESET',
                'params': ''
            },
            {
                'modeId': 'comp-jdsrqjla-mode-jdsrqjo41',
                'type': 'HOVER',
                'label': 'MODE_LABEL_FROM_PRESET',
                'params': ''
            }
        ],
        'overrides': [],
        'isHiddenByModes': false
    },
    'components': [
        {
            'type': 'Component',
            'skin': 'wysiwyg.viewer.skins.button.BasicButton',
            'layout': {
                'x': 75.42196531791907,
                'y': 83.52380952380952,
                'fixedPosition': false,
                'width': 151,
                'height': 40,
                'scale': 1,
                'rotationInDegrees': 0
            },
            'componentType': 'wysiwyg.viewer.components.SiteButton',
            'modes': {
                'isHiddenByModes': true,
                'definitions': [],
                'overrides': [
                    {
                        'modeIds': [
                            'comp-jdsrqjla-mode-jdsrqjo41'
                        ],
                        'layout': {
                            'x': 75,
                            'y': 83.52380952380952,
                            'fixedPosition': false,
                            'width': 151,
                            'height': 40,
                            'scale': 1,
                            'rotationInDegrees': 0
                        },
                        'isHiddenByModes': false
                    }
                ]
            },
            'data': {
                'type': 'LinkableButton',
                'metaData': {
                    'isPreset': false,
                    'schemaVersion': '1.0',
                    'isHidden': false
                },
                'label': 'View More',
                'link': null
            },
            'props': {
                'type': 'ButtonProperties',
                'metaData': {
                    'isPreset': false,
                    'schemaVersion': '1.0',
                    'isHidden': false
                },
                'align': 'center',
                'margin': 0
            },
            'style': {
                'type': 'TopLevelStyle',
                'styleType': 'custom',
                'metaData': {
                    'isPreset': false,
                    'schemaVersion': '1.0',
                    'isHidden': false
                },
                'style': {
                    'groups': {},
                    'properties': {
                        'alpha-bg': '1',
                        'alpha-bgh': '1',
                        'alpha-brd': '1',
                        'alpha-brdh': '1',
                        'alpha-txt': '1',
                        'alpha-txth': '1',
                        'bg': '#323232',
                        'bgh': '#000000',
                        'boxShadowToggleOn-shd': 'false',
                        'brd': '#323232',
                        'brdh': '#323232',
                        'brw': '0px',
                        'fnt': 'normal normal normal 16px/1.4em eb+garamond',
                        'rd': '0px',
                        'shd': '0px 1px 4px 0px rgba(0,0,0,0.6)',
                        'txt': '#FFFFFF',
                        'txth': '#FFFFFF'
                    },
                    'propertiesSource': {
                        'alpha-bgh': 'value',
                        'bg': 'value',
                        'bgh': 'value',
                        'brd': 'value',
                        'brdh': 'value',
                        'brw': 'value',
                        'fnt': 'value',
                        'rd': 'value',
                        'shd': 'value',
                        'txt': 'value',
                        'txth': 'value'
                    }
                },
                'componentClassName': 'wysiwyg.viewer.components.SiteButton',
                'pageId': '',
                'compId': '',
                'skin': 'wysiwyg.viewer.skins.button.BasicButton'
            },
            'connections': {
                'type': 'ConnectionList',
                'items': [],
                'metaData': {
                    'isPreset': false,
                    'schemaVersion': '1.0',
                    'isHidden': false
                }
            },
            'activeModes': {}
        }
    ],
    'componentType': 'wysiwyg.viewer.components.HoverBox',
    'type': 'Container',
    'props': {
        'type': 'HoverBoxProperties',
        'metaData': {
            'isPreset': false,
            'schemaVersion': '1.0',
            'isHidden': false
        },
        'mobileDisplayedModeId': 'comp-jdsrqjla-mode-jdsrqjo41'
    },
    'mobileHints': {
        'type': 'MobileHints',
        'recommendedWidth': 280,
        'recommendedScale': 1,
        'author': 'studio',
        'metaData': {
            'isPreset': false,
            'schemaVersion': '1.0',
            'isHidden': false
        }
    },
    'design': {
        'type': 'MediaContainerDesignData',
        'metaData': {
            'isPreset': false,
            'schemaVersion': '1.0',
            'isHidden': false
        },
        'background': {
            'type': 'BackgroundMedia',
            'metaData': {
                'isPreset': false,
                'schemaVersion': '1.0',
                'isHidden': false
            },
            'color': '#36D1B5',
            'colorOpacity': 1,
            'alignType': 'center',
            'fittingType': 'fill',
            'scrollType': 'none',
            'colorOverlay': '',
            'colorOverlayOpacity': 0,
            'showOverlayForMediaType': 'all',
            'mediaTransforms': {
                'scale': 1
            }
        },
        'cssStyle': {
            'cssBorder': {
                'width': {
                    'top': {
                        'value': 0,
                        'unit': 'px'
                    },
                    'right': {
                        'value': 0,
                        'unit': 'px'
                    },
                    'bottom': {
                        'value': 0,
                        'unit': 'px'
                    },
                    'left': {
                        'value': 0,
                        'unit': 'px'
                    }
                },
                'style': {
                    'top': 'solid',
                    'right': 'solid',
                    'left': 'solid',
                    'bottom': 'solid'
                },
                'color': {
                    'top': {
                        'red': 176,
                        'green': 169,
                        'blue': 134,
                        'alpha': 1
                    },
                    'right': {
                        'red': 176,
                        'green': 169,
                        'blue': 134,
                        'alpha': 1
                    },
                    'left': {
                        'red': 176,
                        'green': 169,
                        'blue': 134,
                        'alpha': 1
                    },
                    'bottom': {
                        'red': 176,
                        'green': 169,
                        'blue': 134,
                        'alpha': 1
                    }
                }
            },
            'cssBorderRadius': {
                'topLeft': {
                    'value': 0,
                    'unit': 'px'
                },
                'topRight': {
                    'value': 0,
                    'unit': 'px'
                },
                'bottomLeft': {
                    'value': 0,
                    'unit': 'px'
                },
                'bottomRight': {
                    'value': 0,
                    'unit': 'px'
                }
            }
        },
        'themeMappings': {},
        'charas': 'design-ivwdmh2u',
        'dataChangeBehaviors': []
    },
    'style': {
        'type': 'TopLevelStyle',
        'styleType': 'custom',
        'metaData': {
            'isPreset': false,
            'schemaVersion': '1.0',
            'isHidden': false
        },
        'style': {
            'properties': {
                'alpha-bg': '1',
                'alpha-brd': '1',
                'bg': '206,224,193,1',
                'boxShadowToggleOn-shd': 'false',
                'brd': '#324158',
                'brw': '0px',
                'rd': '0px',
                'shd': '0px 1px 4px 0px rgba(0,0,0,0.6)'
            },
            'propertiesSource': {
                'bg': 'value',
                'brd': 'value',
                'brw': 'value',
                'rd': 'value',
                'shd': 'value'
            },
            'groups': {}
        },
        'componentClassName': 'wysiwyg.viewer.components.HoverBox',
        'pageId': '',
        'compId': '',
        'skin': 'wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer'
    },
    'connections': {
        'type': 'ConnectionList',
        'items': [],
        'metaData': {
            'isPreset': false,
            'schemaVersion': '1.0',
            'isHidden': false
        }
    },
    'activeModes': {}
}

const SOSP_CONTAINER_DEF = {
    componentType: 'wysiwyg.viewer.components.SiteRegionContainer',
    layout: {
        x: 0,
        y: 0,
        fixedPosition: false,
        width: 291,
        height: 451,
        scale: 1,
        rotationInDegrees: 0
    },
    type: 'Container',
    components: [],
    style: {
        type: 'TopLevelStyle',
        id: 'c1',
        metaData: {
            isPreset: true,
            schemaVersion: '1.0',
            isHidden: false
        },
        style: {
            properties: {
                'alpha-bg': 0,
                'alpha-brd': '1',
                bg: 'color_1',
                'boxShadowToggleOn-shd': false,
                brd: 'color_15',
                brw: '0',
                rd: '0px',
                shd: '0px 0px 0px 0px rgba(0,0,0,0)'
            },
            propertiesSource: {
                bg: 'theme',
                brd: 'theme',
                brw: 'value',
                rd: 'value',
                shd: 'value'
            },
            groups: {}
        },
        componentClassName: '',
        pageId: '',
        compId: '',
        styleType: 'system',
        skin: 'wysiwyg.viewer.skins.area.DefaultAreaSkin'
    },
    activeModes: {}
}

const CONSTS = {
    ROUTER_NAME: 'TEST',
    PAGE_GROUP_NAME: 'TEST',
    CONTOLLER_ID: 'test_controller',
    HOVERBOX_ID: 'hover_box_id',
    SOSP_CONTAINER_ID: 'sosp_container_id',
    CONTAINER_ID: 'container_id',
    MENU_IDS: {
        MENU_ID1: 'menuId1',
        MENU_ID2: 'menuId2'
    }
}


async function addContainer(editorSDK, appToken, controllerRef, containerRef) {
    const componentDefinition = {
        componentType: 'mobile.core.components.Container',
        layout: {
            x: 100,
            'y': 100,
            'width': 200,
            'height': 100
        },
        'type': 'Container',
        'style': 'c2'
    }
    const compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef: containerRef, customId: CONSTS.CONTAINER_ID})
    editorSDK.controllers.connect(appToken, {
        connectToRef: compRef,
        controllerRef: controllerRef,
        role: 'container_role',
        connectionConfig: {}
    })
}

async function createController(editorSDK, appToken) {
    const pageRef = await editorSDK.pages.getCurrent()
    return await editorSDK.components.add(appToken, {pageRef, componentDefinition: CONTROLLER_COMP_DEF, customId: CONSTS.CONTOLLER_ID})
}

async function createHoverBoxWithButtonOnHover(editorSDK, appToken) {
    const pageRef = await editorSDK.pages.getCurrent()
    await editorSDK.components.add(appToken, {pageRef, componentDefinition: HOVER_BOX_DEF, customId: CONSTS.HOVERBOX_ID})
    // editorSDK.controllers.connect(appToken, {
    //     connectToRef: compRef,
    //     controllerRef: controllerRef,
    //     role: 'container_role',
    //     connectionConfig: {}
    // })
}

async function createMenus(editorSDK, appToken) {
    const menu1Promise = editorSDK.menu.create(appToken, {menuData: {name: 'Menu1', items: []}, customId: CONSTS.MENU_IDS.MENU_ID1})
    const menu2Promise = editorSDK.menu.create(appToken, {menuData: {name: 'Menu2', items: []}, customId: CONSTS.MENU_IDS.MENU_ID2})

    return {
        members: await menu1Promise,
        login: await menu2Promise
    }
}

async function createSospContainer(editorSDK, appToken, headerRef, masterRef) {
    const headerLayout = await editorSDK.components.layout.get(appToken, {componentRef: headerRef})
    SOSP_CONTAINER_DEF.layout.y += headerLayout.height
    return await editorSDK.components.add(appToken, {
        pageRef: masterRef,
        componentDefinition: SOSP_CONTAINER_DEF,
        showAddToHeaderPanel: false,
        customId: CONSTS.SOSP_CONTAINER_ID
    })
}

async function installRouters(editorSDK, appToken) {
    return await editorSDK.routers.add(appToken, {
        prefix: CONSTS.ROUTER_NAME,
        config: {
            type: 'test_router'
        }
    })
}

async function addPageToRouter(editorSDK, appToken,routerRef){
    return await editorSDK.routers.pages.add(appToken, {
        routerRef,
        pageTitle : 'titleee',
        pageRoles: 'pageRole',
    })
}

async function shouldInstall(editorSDK, appToken){
    const routersArr = await editorSDK.routers.getAll(appToken)
    return routersArr.length === 0
}

async function install(editorSDK, appDefinitionId){
    const masterRef = await editorSDK.siteSegments.getSiteStructure(appDefinitionId)
    const controllerRef = await createController(editorSDK, appDefinitionId)
    await createHoverBoxWithButtonOnHover(editorSDK, appDefinitionId)
    await createMenus(editorSDK, appDefinitionId)
    const headerRef = await editorSDK.siteSegments.getHeader(appDefinitionId)
    const sospContainer = await createSospContainer(editorSDK, appDefinitionId, headerRef, masterRef)
    const routerRef = await installRouters(editorSDK, appDefinitionId)
    const newPageRef = await addPageToRouter(editorSDK, appDefinitionId, routerRef)
    const groupId =  await editorSDK.pagesGroup.create(appDefinitionId, {groupName: CONSTS.PAGE_GROUP_NAME})
    const groupRef = await editorSDK.pagesGroup.getById(appDefinitionId, {pagesGroupId: groupId})
    await editorSDK.pagesGroup.addPageToPagesGroup(appDefinitionId, {pagesGroupPointer: groupRef, pageId: newPageRef.id})
    const pageRef = await editorSDK.pages.getCurrent()

    await addContainer(editorSDK, appDefinitionId, controllerRef, pageRef)

    const pagesGroupPointer = await editorSDK.pagesGroup.getByGroupName(appDefinitionId, {groupName: CONSTS.PAGE_GROUP_NAME})
    await editorSDK.components.modes.showComponentOnlyOnPagesGroup(appDefinitionId, {componentPointer: sospContainer, pagesGroupPointer})
}

async function editorReady(editorSDK, appDefinitionId) {
    console.log(editorSDK);
    if (await shouldInstall(editorSDK, appDefinitionId)){
        await install(editorSDK, appDefinitionId)
    }
}

function onEvent(event) {
    switch (event.eventType) {
        default:
            break;
    }
}


module.exports = {
    onEvent: onEvent,
    editorReady: editorReady,
    getAppManifest: getAppManifest
};