Ext.define('OmniEshops.account.AccountHome', {
    extend: "Ext.tab.Panel",
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
    plugins: 'responsive',
    defaults: {
        plugins: 'responsive'
    },
    items:[
        {
            xtype:'accountPrivacy'
        },{
            xtype:'accountProfile'
        }
    ]

});