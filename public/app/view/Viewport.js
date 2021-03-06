Ext.define('NU.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'NU.view.Toolbar',
		'NU.view.StatusBar'
    ],
    cls: 'desktop',
    layout: 'border',
    items: [{
        xtype: 'nu_toolbar',
        region: 'north'
    }, {
        xtype: 'container',
        region: 'center',
        id: 'main_display',
        itemId: 'main_display',
        style: {
            backgroundColor: '#000'
        }
    }, {
		xtype: 'nu_statusbar',
		region: 'south'
	}]
});
