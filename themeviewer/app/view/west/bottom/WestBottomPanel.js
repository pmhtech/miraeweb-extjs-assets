Ext.define('ThemeViewer.view.west.bottom.WestBottomPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.west-bottom-panel',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Column',
        'ThemeViewer.view.west.bottom.DataPicker',
        'ThemeViewer.view.west.bottom.PlainTabs',
        'ThemeViewer.view.west.bottom.ResizerPanel',
        'ThemeViewer.view.west.bottom.ScrollingTabs'
    ],
    layout: 'column',
    defaults : {
        columnWidth : .5
    },
    items: [{
        xtype: 'plain-tabs',
        height : 150
    }, {
        xtype: 'scrolling-tabs',
        height : 150
    },{
        xtype : 'data-picker'
    },{
        xtype : 'resizer-panel',
        height : 220,
    },]
});
