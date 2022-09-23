Ext.define('ThemeViewer.view.west.bottom.PlainTabs', {
    extend: 'Ext.tab.Panel',
    alias : 'widget.plain-tabs',
    id: 'plainTabs',
    plain: true,
    activeTab: 0,
    defaults: {
        bodyPadding: 10
    },
    items: [{
        title: 'Tab 1',
        html: 'Free-standing tab panel'
    }, {
        title: 'Tab 2',
        closable: true
    }, {
        title: 'Tab 3',
        closable: true
    }]
});
