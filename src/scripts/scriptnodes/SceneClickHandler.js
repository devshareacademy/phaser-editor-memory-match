
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SceneClickHandler extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	autoExecute = false;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if (this.autoExecute) {
			this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
				this.executeChildren();
			});
		}
	}

	execute() {
		this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.executeChildren();
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
