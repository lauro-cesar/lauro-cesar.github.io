Ext.define('OmniEshops.account.AccountController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.accountController',
    init: function() {
        console.log("Account started");
    }
});

Ext.define('OmniEshops.account.AccountViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.accountViewModel'
});

Ext.define('OmniEshops.account.AccountPrivacy', {
    extend: 'Ext.Panel',
    xtype: 'accountPrivacy',
    alias: 'widget.Privacy',
    html: 'Test Privacy',
    title: 'Test Privacy Classic'
});

Ext.define('OmniEshops.account.AccountProfile', {
    extend: 'Ext.Panel',
    xtype: 'accountProfile',
    alias: 'widget.Profile',
    html: 'Test Profile',
    title: 'Test Profile Classic'
});

Ext.define('OmniEshops.account.AccountHome', {
    extend: 'Ext.Panel',
    xtype: 'accountHome',
    alias: 'widget.accountHome',
    requires: [
        'OmniEshops.account.AccountPrivacy',
        'OmniEshops.account.AccountProfile',
        'OmniEshops.account.AccountController',
        'OmniEshops.account.AccountViewModel'
    ],
    viewModel: 'accountViewModel',
    controller: 'accountController',
    layout: 'card',
    defaults: {
        plugins: 'responsive',
        responsiveConfig: {
            wide: {
                iconAlign: 'left',
                textAlign: 'left'
            },
            tall: {
                iconAlign: 'top',
                textAlign: 'center'
            }
        }
    },
    items: [
        {
            xtype: 'accountPrivacy'
        },
        {
            xtype: 'accountProfile'
        }
    ]
});

