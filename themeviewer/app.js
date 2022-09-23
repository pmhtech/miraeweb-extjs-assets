/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext.app.Application',

    name: 'ThemeViewer',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    launch : function(){

        Ext.create('ThemeViewer.view.ViewPort');
    }
});
