Ext.define('ThemeViewer.view.grid.GridPanel', {
    extend: 'Ext.grid.Panel',
    id: 'grid',
    alias : 'widget.grid-panel',
    requires: [
        'Ext.data.ArrayStore',
        'Ext.form.field.Trigger',
        'Ext.grid.column.Date',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Paging'
    ],
    title: 'GridPanel',
    collapsible: true,

    viewModel: {
        stores: {
            gridPanel: {
                type: 'array',
                fields: [
                    {name: 'company'},
                    {name: 'price', type: 'float', convert: null},
                    {name: 'change', type: 'float', convert: null},
                    {name: 'pctChange', type: 'float', convert: null},
                    {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
                ],
                sorters: {
                    property: 'company',
                    direction: 'ASC'
                },
                data: [
                    ['E.I. du Pont de Nemours and Company', 40.48, 0.51, 1.28, '9/1 12:00am'],
                    ['Citigroup, Inc.', 49.37, 0.02, 0.04, '9/1 12:00am'],
                    ['Caterpillar Inc.', 67.27, 0.92, 1.39, '9/1 12:00am'],
                    ['Boeing Co.', 75.43, 0.53, 0.71, '9/1 12:00am'],
                    ['AT&T Inc.', 31.61, -0.48, -1.54, '9/1 12:00am'],
                    ['American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am'],
                    ['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am'],
                    ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'],
                    ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
                    ['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am']
                ],
                pageSize: 8
            }
        }
    },

    bind : {
        store : '{gridPanel}',
    },
    columns: [
        {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
        {text: "Price", width: 75, sortable: true, dataIndex: 'price'},
        {text: "Change", width: 80, sortable: true, dataIndex: 'change'},
        {text: "% Change", width: 95, sortable: true, dataIndex: 'pctChange'},
        {text: "Last Updated", width: 110, sortable: true, xtype: 'datecolumn', dataIndex: 'lastChange'}
    ],
    loadMask: true,

    bbar: [{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{gridPanel}'
        },
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}'

    }],
    tbar: [
        {text: 'Toolbar'},
        '->',
        {
            xtype: 'triggerfield',
            trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
            trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
        }
    ]
});
