'use strict';
module.exports = {
    editorReady(editorSDK, appDefinitionId) {
        function getPageStructure() {
            return {
                data: {
                    hideTitle: true,
                    isLandingPage: false,
                    indexable: false,
                    hidePage: true,
                    managingAppDefinitionId: appDefinitionId
                },
                components: []
            };
        }
        editorSDK.pages.add('token',{title: 'AdminPage', definition:getPageStructure()})

    },
    getAppManifest() {
        return {
            pages: {
                pageActions: {
                    default: [{
                        event: 'rename44444',
                        title: 'Rename4444',
                        icon: 'renameAction',
                        type: 'page_rename'
                    }],
                    overrides: [{condition: {
                            advanced: false
                        }, override: [{
                            event: 'rename222',
                            title: 'Rename2222',
                            icon: 'renameAction',
                            type: 'page_rename'
                        },{
                            event: 'rename33333',
                            title: 'Rename33333',
                            icon: 'renameAction',
                            type: 'page_rename'
                        }]}]
                },
                pageSettings: {
                    default: [
                        {
                            title: 'tab1',
                            event: 'pageInfo',
                            icon: 'page_dynamic_icon',
                            url: './panel.html',
                            helpId: '2fd96dc5-ff35-4ead-9917-12b487c59fe4',
                            type: 'page_info'
                        },
                        {
                            title: 'tab2',
                            event: 'pagePermissions',
                            icon: 'page_dynamic_icon',
                            url: './panel.html',
                            helpId: 'd243ad48-2e17-4786-99d7-23d011aa4bd6',
                            type: 'permissions'
                        }
                    ],
                    overrides: [{
                        condition: {
                            advanced: false
                        },
                        override: [
                            {
                                title: 'tab2',
                                event: 'pagePermissions',
                                icon: 'page_dynamic_icon',
                                url: './panel.html',
                                helpId: 'd243ad48-2e17-4786-99d7-23d011aa4bd6',
                                type: 'page_info'
                            }
                        ]
                    }]
                },
                applicationSettings: {
                    default :{
                        displayName: 'Admin pages',
                        helpId: 'd243ad48-2e17-4786-99d7-23d011aa4bd6',
                        emptyState: {
                            url: './panel.html',
                            helpId: '2fd96dc5-ff35-4ead-9917-12b487c59fe4'
                        }
                    },
                    overrides: [{
                        condition: {
                            advanced: false
                        },
                        override: {
                            displayName: 'Admin pages category'
                        }
                    }]

                },
                applicationActions: {
                    default: [
                        {
                            title: 'Delete application',
                            event: 'uninstall',
                            icon: 'delete_icon'
                        }
                    ],
                    overrides: [{
                        condition: {
                            advanced: false
                        },
                        override: [
                            {
                                title: 'Delete application',
                                event: 'uninstall',
                                icon: 'delete_icon'
                            },
                            {
                                title: 'Delete application2222222222',
                                event: 'uninstall',
                                icon: 'delete_icon'
                            }
                        ]
                    }]
                }
            }
        }
    }
}