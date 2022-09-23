
Ext.define('ThemeViewer.view.west.bottom.ScrollingTabs',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.scrolling-tabs',
    activeTab: 0,
    defaults: {
        bodyPadding: 10
    },
    enableTabScroll: true,
    plain: true,
    items: [
        {
            title: 'Tab 1',
            html: 'Tab panel 1 content'
        },
        {
            title: 'Tab 2',
            html: 'Tab panel 2 content',
            closable: true
        },
        {
            title: 'Tab 3',
            html: 'Tab panel 3 content',
            closable: true
        },
        {
            title: 'Tab 4',
            html: 'Tab panel 4 content',
            closable: true
        },
        {
            title: 'Tab 5',
            html: 'Tab panel 5 content',
            closable: true
        },
        {
            title: 'Tab 6',
            html: 'Tab panel 6 content',
            closable: true
        }
    ]
});
