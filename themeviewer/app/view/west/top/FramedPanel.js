
Ext.define('ThemeViewer.view.west.top.FramedPanel',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.framed-panel',
    id : 'framedPanel',
    title: 'Framed Panel',
    animCollapse: true,
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [{
            text: 'test'
        }]
    }, {
        dock: 'right',
        xtype: 'toolbar',
        items: [{
            text: 'test B'
        }]
    }, {
        dock: 'left',
        xtype: 'toolbar',
        items: [{
            text: 'test A'
        }]
    }],
    html: 'Some content',
    frame: true
});
