
Ext.define('ThemeViewer.view.west.top.BasicWindow',{
    extend: 'Ext.window.Window',
    alias : 'widget.basic-window',
    id: 'basicWindow',
    hidden: false,
    title: 'Window',
    bodyPadding: 5,
    html: 'Click Submit for Confirmation Msg.',
    collapsible: true,
    floating: false,
    closable: false,
    draggable: false,
    resizable: { handles: 's' },
    animCollapse: true,

    tbar: [
        { text: 'Toolbar' }
    ],
    buttons: [
        {
            text: 'Submit',
            id: 'message_box',
            handler: function() {
                Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?');
            }
        }
    ]
});
