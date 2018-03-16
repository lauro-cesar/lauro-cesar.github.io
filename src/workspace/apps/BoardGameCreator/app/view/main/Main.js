Ext.define('BoardGameCreator.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'BoardGameCreator.view.main.MainController',
        'BoardGameCreator.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: 'main',
    layout:'card',
    mixins: [
        'Ext.mixin.Responsive'
    ],
    id:'omniMainDesk',
    items:[
        {
            xtype:'mainPanel',
            reference:'workspace',
            layout:'fit',
        },{
            xtype:'mainPanel',
            reference:'systemSettings',
            html:'systemSettings'
        },{
            xtype:'mainPanel',
            reference:'accountLogout',
            bind:{
                html:'<a href=/manager/profile/logout/>Sair</a>'
            }
        }
    ]
});
