Ext.define('NU.view.ToolbarController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.Toolbar',
	create: function (name, config) {
		Ext.syncRequire(name);
		Ext.create(name, Ext.applyIf({
			constrainTo: this.getDisplay()
		}, config || {}));
	},
	onLocalisationDisplay: function () {
		this.create('NU.view.window.Field');
	},
	onVisionDisplay: function () {
		this.create('NU.view.window.Vision');
	},
	onChartDisplay: function () {
		this.create('NU.view.window.Chart');
	},
	onNUClearDisplay: function () {
		this.create('NU.view.window.NUClear');
	},
	onClassifierDisplay: function () {
		this.create('NU.view.window.Classifier');
	},
	onBehaviourDisplay: function () {
		this.create('NU.view.window.Behaviour');
	},
	onGameStateDisplay: function () {
		this.create('NU.view.window.GameState');
	},
	onVisualise: function () {
		// calculations
		var display = this.getDisplay();
		var width = display.getWidth();
		var height = display.getHeight();
		var x = display.getX();
		var y = display.getY();
		var magic = 1.3898; // vision window needs to be this ratio of width/height (this is a hack)
		var padding = 5;

		var size = (height - 3 * padding) / 2;

		this.create('NU.view.window.Field', {
			x: x + padding,
			y: y + padding,
			width: width - (size * magic) - 3 * padding,
			height: size
		});
		this.create('NU.view.window.Vision', {
			x: x + width - (size * magic) - padding,
			y: y + padding,
			width: size * magic,
			height: size
		});
		this.create('NU.view.window.Chart', {
			x: x + padding,
			y: y + height - size - padding,
			width: width - (size * magic) - 3 * padding,
			height: size
		});
		this.create('NU.view.window.Vision', {
			x: x + width - (size * magic) - padding,
			y: y + height - size - padding,
			width: size * magic,
			height: size
		});
	},
	onCloseAll: function () {
		Ext.WindowManager.each(function (window) {
			window.close();
		});
	},
    onConfiguration: function () {
        this.create('NU.view.window.Configuration');
    },
	onNetworkSettings: function () {
		Ext.syncRequire('NU.view.NetworkSettings');
		Ext.create('Ext.Window', {
			autoShow: true,
			modal: true,
			title: 'Network Settings',
			width: 500,
			height: 500,
			layout: 'fit',
			items: [{
				xtype: 'networksettings'
			}]
		});
    },
    getDisplay: function () {
        return Ext.getCmp('main_display').getEl();
    }
});
