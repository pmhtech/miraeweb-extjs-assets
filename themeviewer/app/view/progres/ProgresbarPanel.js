Ext.define('ThemeViewer.view.progres.ProgresbarPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.progressbar-panel',
    requires: [
        'Ext.layout.container.Anchor',
        'Ext.slider.Single'
    ],

    title: 'ProgressBar / Slider',
    bodyPadding: 5,
    layout: 'anchor',
    items: [{
        xtype: 'progressbar',
        value: .5,
        text: 'Progress text...'
    }, {
        xtype: 'slider',
        hideLabel: true,
        value: 50,
        margin: '5 0 0 0',
        anchor: '100%'
    }, {
        xtype: 'slider',
        vertical: true,
        value: 50,
        height: 100,
        margin: '5 0 0 0'
    }],
    listeners : {
        afterrender: function(comp){

            var progressbar = comp.down('progressbar');
            setTimeout(function() {
                progressbar.wait({
                    // animate: true,
                    text: 'Progress text...'
                });
            }, 7000);
        }
    }
});
