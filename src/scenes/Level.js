
// You can write more code here

/* START OF COMPILED CODE */

import Card from "../prefabs/Card.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// fF5IT3
		const fF5IT3 = this.add.image(-7, -28, "fF5IT3");
		fF5IT3.scaleX = 0.72;
		fF5IT3.scaleY = 0.72;
		fF5IT3.setOrigin(0, 0);

		// card
		const card = new Card(this, 213, 135);
		this.add.existing(card);

		// card (prefab fields)
		card.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
