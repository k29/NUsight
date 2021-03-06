Ext.define('NU.view.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.nu_toolbar',
    requires: 'NU.view.ToolbarController',
    controller: 'Toolbar',
    items: [{
        text: 'Localisation',
        listeners: {
            click: 'onLocalisationDisplay'
        }
    }, {
        text: 'Vision',
        listeners: {
            click: 'onVisionDisplay'
        }
    }, {
        text: 'Chart',
        listeners: {
            click: 'onChartDisplay'
        }
    }, {
        text: 'NUClear',
        listeners: {
            click: 'onNUClearDisplay'
        }
    }, {
        text: 'Classifier',
        listeners: {
            click: 'onClassifierDisplay'
        }
    }, {
        text: 'Behaviour',
        listeners: {
            click: 'onBehaviourDisplay'
        }
    }, {
        text: 'GameState',
        listeners: {
            click: 'onGameStateDisplay'
        }
    },'->', {
        text: 'Visualise',
        listeners: {
            click: 'onVisualise'
        }
    }, {
		text: 'Close All',
        listeners: {
            click: 'onCloseAll'
        }
    }, {
        text: 'Configuration',
        iconCls: 'icon-cog',
        listeners: {
            click: 'onConfiguration'
        }
	}, {
		text: 'Settings',
		iconCls: 'icon-cog',
        listeners: {
            click: 'onNetworkSettings'
        }
	}]
});
