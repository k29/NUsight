Ext.define('NU.view.window.Field', {
    extend : 'NU.view.window.Display',
    alias : ['widget.nu_field_window'],
    requires: [
        'NU.view.field.Robot',
        'NU.view.robot.Selector'
    ],
    controller: 'NU.controller.Field',
    title: 'Localisation Display',
    width: 800,
    height: 400,
    layout: 'fit',
    tbar: [{
        xtype: 'robot_selector'
    }, {
        text: 'HawkEye',
        itemId: 'hawkeye'
    }, {
        text: 'Perspective',
        itemId: 'perspective'
    }, {
        text: 'Side',
        itemId: 'side'
    }, {
        text: 'Close Front',
        itemId: 'close_front'
    }, {
        text: 'Close Angle',
        itemId: 'close_angle'
    }, {
        text: 'Close Side',
        itemId: 'close_side'
    }],
    items: [{
        xtype: 'threejs',
        itemId: 'mainscene'
    }]
});