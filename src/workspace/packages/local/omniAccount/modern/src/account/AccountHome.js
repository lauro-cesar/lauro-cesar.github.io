Ext.define('OmniEshops.account.AccountHome', {
    extend: 'Ext.Panel',
    xtype: 'accountHome',
    alias:'widget.accountHome',
    requires:[
        'OmniEshops.account.AccountPrivacy',
        'OmniEshops.account.AccountProfile',
        'OmniEshops.account.AccountController',
        'OmniEshops.account.AccountViewModel'
    ],
    viewModel:'accountViewModel',
    controller:'accountController',
    layout:'card',
    items:[
        {
            xtype:'accountPrivacy'
        },{
            xtype:'accountProfile'
        }
    ]

});