
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StopGameObjectTweens extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject[]} */
	targetGameObjects = [];

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		(/** @type {Phaser.Scene} */ (this.scene)).tweens.killTweensOf(this.targetGameObjects);
		this.executeChildren();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
