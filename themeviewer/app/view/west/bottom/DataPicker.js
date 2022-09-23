
Ext.define('ThemeViewer.view.west.bottom.DataPicker',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.data-picker',

    requires: [
        'Ext.picker.Date'
    ],
    border: false,
    items: {
        xtype: 'datepicker'
    }
});
