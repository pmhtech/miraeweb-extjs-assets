
Ext.define('ThemeViewer.view.ViewPort',{
    extend: 'Ext.container.Viewport',
    alias : 'widget.view-port',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'ThemeViewer.view.grid.FramedGridPanel',
        'ThemeViewer.view.grid.GridPanel',
        'ThemeViewer.view.panel.AccordionPanel',
        'ThemeViewer.view.panel.BorderLayout',
        'ThemeViewer.view.panel.PanelWithToolbars',
        'ThemeViewer.view.progres.ProgresbarPanel',
        'ThemeViewer.view.west.bottom.WestBottomPanel',
        'ThemeViewer.view.west.middle.FormWidgets',
        'ThemeViewer.view.west.top.WestTopPanel'
    ],

    layout : {
        type : 'hbox',
        align : 'stretch'
    },
    scrollable : true,
    items : [{

        xtype : 'container',
        scrollable : true,
        region : 'west',
        width : 600,
        layout : {
            type : 'vbox',
            align : 'stretch'
        },
        items :[{
            xtype : 'west-top-panel',
            height : 300,
        },{
            xtype : 'form-widgets',
            height : 1050
        },{
            xtype : 'west-bottom-panel',
            height : 500
        }]
    },{

        xtype : 'container',
        width : 600,
        scrollable : true,
        region : 'center',
        layout : {
            type : 'vbox',
            align : 'stretch'
        },
        items :[{
            xtype : 'panel-with-toolbars',
            height : 330,
        },{
            xtype : 'border-layout',
            height : 330
        },{
            xtype : 'grid-panel',
            height : 330
        },{
            xtype : 'accordion-panel',
            height : 330,
        },{
            xtype : 'progressbar-panel',
            height : 220
        },{
            xtype : 'framed-grid-panel',
            height : 220
        }]
    }]

});
