
Ext.define('ThemeViewer.view.west.top.CollapsedPanel',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.collapsed-panel',
    id : 'collapsedPanel',
    title: 'Collapsed Panel',
    animCollapse: true,
    bodyPadding: 5,
    html: 'Some content',
    collapsible: true,
    collapsed: true
});
