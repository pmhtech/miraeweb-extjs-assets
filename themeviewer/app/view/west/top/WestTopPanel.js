Ext.define('ThemeViewer.view.west.top.WestTopPanel', {
    extend: 'Ext.container.Container',
    alias: 'widget.west-top-panel',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'ThemeViewer.view.panel.BasicPanel',
        'ThemeViewer.view.west.top.BasicWindow',
        'ThemeViewer.view.west.top.CollapsedFramedPanel',
        'ThemeViewer.view.west.top.CollapsedPanel',
        'ThemeViewer.view.west.top.FramedPanel',
        'ThemeViewer.view.west.top.MaskedPanel'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        flex: 1,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'basic-panel',
            flex: 1
        }, {
            xtype: 'collapsed-panel',
            flex: 1
        }]
    },{
        xtype : 'masked-panel',
        flex : 1,
    },{
        xtype: 'container',
        flex: 1,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'framed-panel',
            flex: 1
        }, {
            xtype: 'collapsed-framed-panel',
            flex: 1
        }]
    },{
        xtype : 'basic-window'
    }]
});
