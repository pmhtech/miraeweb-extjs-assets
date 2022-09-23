
Ext.define('ThemeViewer.view.west.bottom.ResizerPanel',{
    extend: 'Ext.Component',
    alias : 'widget.resizer-panel',
    style: 'background:transparent;overflow:hidden;',
    html: '<div style="margin:20px">Resizable handles</div>',
    resizable: {
        handles: 'all',
        pinned: true
    }
});
