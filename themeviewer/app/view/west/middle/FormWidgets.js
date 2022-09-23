
Ext.define('ThemeViewer.view.west.middle.FormWidgets',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.form-widgets',
    id : 'formWidgets',
    requires: [
        'Ext.form.CheckboxGroup',
        'Ext.form.FieldSet',
        'Ext.form.Label',
        'Ext.form.RadioGroup',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Number',
        'Ext.form.field.Radio',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.form.field.Time',
        'Ext.layout.container.Anchor'
    ],
    id: 'form-widgets',
    title: 'Form Widgets',
    frame: true,

    tools: [
        { type: 'close' },
        { type: 'minimize' },
        { type: 'maximize' },
        { type: 'restore' },
        { type: 'gear' },
        { type: 'pin' },
        { type: 'unpin' },
        { type: 'right' },
        { type: 'left' },
        { type: 'down' },
        { type: 'refresh' },
        { type: 'minus' },
        { type: 'plus' },
        { type: 'help' },
        { type: 'search' },
        { type: 'save' },
        { type: 'print' }
    ],

    bodyPadding: '10 20',
    layout : 'anchor',
    defaults: {
        anchor: '98%',
        msgTarget: 'side',
        allowBlank: false
    },

    items: [
        {
            xtype: 'label',
            text: 'Plain Label'
        },
        {
            fieldLabel: 'TextField',
            xtype: 'textfield',
            name: 'someField',
            emptyText: 'Enter a value'
        },
        {
            fieldLabel: 'ComboBox',
            xtype: 'combo',
            store: ['Foo', 'Bar']
        },
        {
            fieldLabel: 'DateField',
            xtype: 'datefield',
            name: 'date'
        },
        {
            fieldLabel: 'TimeField',
            name: 'time',
            xtype: 'timefield'
        },
        {
            fieldLabel: 'NumberField',
            xtype: 'numberfield',
            name: 'number',
            emptyText: '(This field is optional)',
            allowBlank: true
        },
        {
            fieldLabel: 'TextArea',
            xtype: 'textareafield',
            name: 'message',
            cls: 'x-form-valid',
            value: 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)'
        },
        {
            fieldLabel: 'Checkboxes',
            xtype: 'checkboxgroup',
            columns: [100, 100],
            items: [
                { boxLabel: 'Foo', checked: true, id: 'fooChk', inputId: 'fooChkInput' },
                { boxLabel: 'Bar' }
            ]
        },
        {
            fieldLabel: 'Radios',
            xtype: 'radiogroup',
            columns: [100, 100],
            items: [{ boxLabel: 'Foo', checked: true, name: 'radios' }, { boxLabel: 'Bar', name: 'radios' }]
        },
        {
            hideLabel: true,
            id: 'htmleditor',
            xtype: 'htmleditor',
            name: 'html',
            enableColors: false,
            value: 'Mouse over toolbar for tooltips.<br /><br />The HTMLEditor IFrame requires a refresh between a stylesheet switch to get accurate colors.',
            height: 110
        },
        {
            xtype: 'fieldset',
            title: 'Plain Fieldset',
            items: [
                {
                    hideLabel: true,
                    xtype: 'radiogroup',
                    items: [
                        { boxLabel: 'Radio A', checked: true, name: 'radiogrp2' },
                        { boxLabel: 'Radio B', name: 'radiogrp2' }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Collapsible Fieldset',
            collapsible: true,
            items: [
                { xtype: 'checkbox', boxLabel: 'Checkbox 1' },
                { xtype: 'checkbox', boxLabel: 'Checkbox 2' }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Checkbox Fieldset',
            checkboxToggle: true,
            items: [
                { xtype: 'radio', boxLabel: 'Radio 1', name: 'radiongrp1' },
                { xtype: 'radio', boxLabel: 'Radio 2', name: 'radiongrp1' }
            ]
        }
    ],

    buttons: [
        {
            text: 'Toggle Enabled',
            handler: function() {
                this.up('form').items.each(function(item) {
                    item.setDisabled(!item.disabled);
                });
            }
        },
        {
            text: 'Reset Form',
            handler: function() {
                Ext.getCmp('form-widgets').getForm().reset();
            }
        },
        {
            text: 'Validate',
            handler: function() {
                Ext.getCmp('form-widgets').getForm().isValid();
            }
        }
    ]
});
