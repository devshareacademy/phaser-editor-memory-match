
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayAudio extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	key = "";
	/** @type {boolean} */
	loop = false;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		if (this.key === '') {
			return;
		}
		this.scene.sound.play(this.key, {
			loop: this.loop
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
