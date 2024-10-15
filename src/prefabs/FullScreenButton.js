
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FullScreenButton extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "fullscreen", frame ?? 0);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 64, 64), Phaser.Geom.Rectangle.Contains);

		/* START-USER-CTR-CODE */
		// Write your code here.
		if (this.scene.scale.isFullscreen) {
			this.setFrame(1);
		} else {
			this.setFrame(0);
		}

		this.on(Phaser.Input.Events.POINTER_UP, () => {
			if (this.scene.scale.isFullscreen) {
				this.setFrame(0);
				this.scene.scale.stopFullscreen();
				return;
			}
			this.setFrame(1);
			this.scene.scale.startFullscreen();
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
