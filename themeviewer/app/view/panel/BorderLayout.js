
Ext.define('ThemeViewer.view.panel.BorderLayout',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.border-layout',
    requires: [
        'Ext.layout.container.Border'
    ],
    id : 'borderLayout',
    title: 'BorderLayout Panel',
    layout: {
        type: 'border',
        padding:  8 // match padding to theme splitter size
    },
    collapsible: true,

    defaults: {
        collapsible: true,
        split: true
    },

    items: [
        {
            title: 'North',
            region: 'north',
            html: 'North',
            height:  70
        },
        {
            title: 'South',
            region: 'south',
            html: 'South',
            collapseMode: 'mini',
            height:  70
        },
        {
            title: 'West',
            region: 'west',
            html: 'West',
            collapseMode: 'mini',
            width:  100
        },
        {
            title: 'East',
            region: 'east',
            html: 'East',
            width:  100
        },
        {
            title: 'Center',
            region: 'center',
            collapsible: false,
            html: 'Center'
        }
    ]
});
