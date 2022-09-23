
Ext.define('ThemeViewer.view.panel.PanelWithToolbars',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.panel-with-toolbars',
    requires: [
        'Ext.button.Button',
        'Ext.button.Split',
        'Ext.container.ButtonGroup',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Spacer'
    ],
    id: 'panelWithToolbars',
    title: 'Basic Panel With Toolbars',
    collapsible: true,
    tbar: {
        id: 'panelWithToolbars_tbar',
        items: [{
            xtype: 'buttongroup',
            title: 'Button Group',
            id: 'panelWithToolbars_btngroup',
            columns: 2,
            defaults: {
                scale: 'small'
            },
            items: [
                {
                    xtype: 'splitbutton',
                    text: 'Menu Button',
                    iconCls: 'add16',
                    menu: [{ text: 'Menu Button 1' }]
                },
                {
                    xtype: 'splitbutton',
                    text: 'Cut',
                    icon: '../shared/icons/fam/cross.gif',
                    id: 'panelWithToolbars_splitbtn',
                    menu: [{ text: 'Cut Menu Item' }]
                }
            ]
        }]
    },
    bbar: {
        id: 'panelWithToolbars_bbar',
        items: [
            ' ',
            '-',
            { text: 'Button' },
            {
                text: 'Menu',
                id: 'menu-btn',
                menu: [
                    { text: 'Menu item' },
                    { text: 'Check 1', checked: true },
                    { text: 'Check 2', checked: false },
                    '-',
                    { text: 'Option 1', checked: true, group: 'opts' },
                    { text: 'Option 2', checked: false, group: 'opts' },
                    '-',
                    {
                        text: 'Sub-items',
                        menu: Ext.widget('menu', {
                            items: [
                                { text: 'Item 1' },
                                { text: 'Item 2' }
                            ]
                        })
                    }
                ]
            },
            {
                xtype: 'splitbutton',
                text: 'Split Button',
                menu: Ext.widget('menu', {
                    items: [
                        { text: 'Item 1' },
                        { text: 'Item 2' }
                    ]
                })
            },
            {
                xtype: 'button',
                enableToggle: true,
                pressed: true,
                text: 'Toggle Button'
            }
        ]
    },
    lbar: {
        id: 'panelWithToolbars_lbar',
        items: [
            { text: 'Left' }
        ]
    },
    rbar: {
        id: 'panelWithToolbars_rbar',
        items: [
            { text: 'Right' }
        ]
    }
});
