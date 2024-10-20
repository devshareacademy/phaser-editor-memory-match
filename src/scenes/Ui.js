
// You can write more code here

/* START OF COMPILED CODE */

import FullScreenButtonPrefab from "../prefabs/FullScreenButtonPrefab.js";
import PlayAudio from "../scripts/scriptnodes/PlayAudio.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Ui extends Phaser.Scene {

	constructor() {
		super("Ui");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// fullscreen0
		const fullscreen0 = new FullScreenButtonPrefab(this, 1238, 42);
		this.add.existing(fullscreen0);

		// playAudio
		const playAudio = new PlayAudio(this);

		// playAudio (prefab fields)
		playAudio.key = "background";
		playAudio.loop = true;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
