Ext.define('NU.view.StatusBar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.nu_statusbar',
	requires: 'NU.view.StatusBarController',
	controller: 'StatusBar',
	defaults: {
//		flex: 1,
		data: {
			count: 0
		}
	},
	layout: {
		type: 'hbox',
		pack: 'end'
	},
	items: [{
		xtype: 'panel',
		reference: 'packetCount',
		style: {
			textAlign: 'right'
		},
		tpl: 'Total: {count}'
	}]
});
