Ext.define("Ext.ux.ThreeJS", {
	extend: 'Ext.Container',
	alias: ['widget.threejs'],
	renderer: null,
    effect: null,
	camera: null,
	scene:  null,
	controls: null,
	items: [{
		xtype: 'component',
		itemId: 'domElementContainer',
		layout: 'fit'
	}, {
		xtype: 'component',
		itemId: 'crosshair',
		cls: 'crosshair'
	}],
    config: {
        renderEffect: false
    },
	setComponents: function (scene, renderer, camera, effect) {
		this.scene = scene;
		this.renderer = renderer;
		this.camera = camera;
        this.effect = effect;
		this.clock = new THREE.Clock();
		this.domElementContainer = this.getComponent('domElementContainer').getEl().dom;
		this.domElementContainer.appendChild(this.renderer.domElement);
		this.domElement = this.domElementContainer.firstChild;
		this.setSize(this.getWidth(), this.getHeight());
		this.startAnimation();

		return this;
	},
	enableControls: function (parameters, objects, coordinates) {
		this.controls = new THREE.NoClipControls(this.camera, this.domElement, objects, coordinates);
		this.scene.add(this.controls.getObject());
		Ext.apply(this.controls, parameters);
		return this;
	},
	startAnimation: function () {
		var self = this;
		var delta;
		
		function animate () {
			delta = self.clock.getDelta();
            requestAnimationFrame(animate);
			if (self.controls) {
				self.controls.update(delta);
			}
			self.fireEvent("animate", delta);
            if (self.renderEffect) {
                self.effect.render(self.scene, self.camera);
            } else {
                self.renderer.render(self.scene, self.camera);
            }
        }
		self.fireEvent("threejsready");
        animate();
		
	},
	setRenderer: function (renderer) {
		this.renderer = renderer;
		this.setSize(this.getWidth(), this.getHeight());
		this.startAnimation();
		return this;
	},
	setCamera: function (camera) {
		this.camera = camera;
		this.setSize(this.getWidth(), this.getHeight());
		return this;
	},
	setScene: function (scene) {
		this.scene = scene;
		return this;
	},
	listeners: {
		resize: function (window, width, height) {
			this.setSize(width, height);
		}
	},
	setSize: function (width, height) {
		if (this.renderer) {
			this.renderer.setSize(width, height);
			var crosshair = this.getComponent('crosshair');
			crosshair.getEl().setStyle({
				'left': Ext.String.format('{0}px', (this.getWidth() - crosshair.getWidth()) * 0.5),
				'top': Ext.String.format('{0}px', (this.getHeight() - crosshair.getHeight()) * 0.5)
			});
		}
		if (this.camera) {
			this.camera.aspect = width / height;
			this.camera.updateProjectionMatrix();
		}
	}
});