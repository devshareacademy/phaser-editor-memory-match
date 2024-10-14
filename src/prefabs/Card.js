
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Card extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "spritesheet", frame ?? "Verse.png");

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 144, 144), Phaser.Geom.Rectangle.Contains);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.on(Phaser.Input.Events.POINTER_DOWN, () => {
			console.log('click on card');
			if (this.isFlipping) {
				return;
			}
			this.isFlipping = true;
			this.isFlipped = !this.isFlipped;
			this.flipTimeLine.play(true);
		});
		this.flipTimeLine = this.scene.add.timeline([
			{
				tween: {
					targets: this,
					alpha: 1,
					scaleX: 0,
					scaleY: 1.2,
					duration: 100,
					ease: Phaser.Math.Easing.Linear,
				},
			},
			{
				at: 100,
				run: () => {
					const textureConfig = this.isFlipped ? this.cardFrontTextureConfig : this.cardBackTextureConfig;
					this.setTexture(textureConfig.key, textureConfig.frame);
				},
			},
			{
				at: 100,
				tween: {
					targets: this,
					scaleX: 1,
					scaleY: 1,
					duration: 100,
					ease: Phaser.Math.Easing.Linear,
				},
			},
			{
				at: 200,
				run: () => {
					this.isFlipping = false;
				},
			}
		]);
		/* END-USER-CTR-CODE */
	}

	/** @type {{key:string,frame?:string|number}} */
	cardFrontTextureConfig;
	/** @type {{key:string,frame?:string|number}} */
	cardBackTextureConfig = {"key":"spritesheet","frame":"Verse.png"};

	/* START-USER-CODE */

	// Write your code here.
	/** @type {boolean} */
	isFlipping = false;
	isFlipped = false;

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */