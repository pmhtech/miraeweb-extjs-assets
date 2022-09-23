Ext.define('ThemeViewer.view.panel.AccordionPanel', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.accordion-panel',
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.tree.Panel'
    ],

    id: 'accordion',
    title: 'Accordion and TreePanel',
    collapsible: true,
    layout: 'accordion',

    items: [{
        xtype: 'treepanel',
        title: 'TreePanel',
        root: {
            text: 'Root Node',
            expanded: true,
            children: [{
                text: 'Item 1',
                leaf: true
            }, {
                text: 'Item 2',
                leaf: true
            }, {
                text: 'Folder',
                children: [{
                    text: 'Item 3',
                    leaf: true
                }]
            }]
        }
    }, {
        title: 'Item 2',
        html: 'Some content'
    }, {
        title: 'Item 3',
        html: 'Some content'
    }
    ]
});
