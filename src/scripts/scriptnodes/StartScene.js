
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartScene extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	sceneName = "";

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		if (this.sceneName === "") {
			return;
		}
		this.scene.scene.start(this.sceneName);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
