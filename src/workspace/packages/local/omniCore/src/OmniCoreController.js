Ext.define('OmniEshops.core.OmniCoreController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.omniCoreController',
    omniRoutes:[
        {
            'home':'onHome'
        }
    ],
    init:function(){
        console.log("Core Controller started");
        console.log(this.getRoutes());
    },
    onHome: function () {
        console.log("Home...");
    }
});
