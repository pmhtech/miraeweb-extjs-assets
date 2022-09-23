
Ext.define('ThemeViewer.view.west.top.CollapsedFramedPanel',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.collapsed-framed-panel',
    id : 'collapsedFramedPanel',
    title: 'Collapsed Framed Panel',
    animCollapse: true,
    bodyPadding: 5,
    bodyBorder: true,
    html: 'Some content',
    frame: true,
    collapsible: true,
    collapsed: true
});
