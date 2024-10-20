
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../prefabs/BackgroundPrefab.js";
import AnimationConfigBase from "../scripts/scriptnodes/AnimationConfigBase.js";
import SceneClickHandler from "../scripts/scriptnodes/SceneClickHandler.js";
import StartScene from "../scripts/scriptnodes/StartScene.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = new BackgroundPrefab(this);
		this.add.existing(background);

		// title
		const title = this.add.image(640, 246, "title");
		title.scaleX = 0;
		title.scaleY = 0;

		// animationConfigBase
		const animationConfigBase = new AnimationConfigBase(title);

		// animationConfigBase_1
		const animationConfigBase_1 = new AnimationConfigBase(animationConfigBase);

		// clickToPlay
		const clickToPlay = this.add.image(640, 521, "clickToPlay");
		clickToPlay.alpha = 0;
		clickToPlay.alphaTopLeft = 0;
		clickToPlay.alphaTopRight = 0;
		clickToPlay.alphaBottomLeft = 0;
		clickToPlay.alphaBottomRight = 0;

		// animationConfigBase_2
		const animationConfigBase_2 = new AnimationConfigBase(clickToPlay);

		// sceneClickHandler
		const sceneClickHandler = new SceneClickHandler(this);

		// startScene
		const startScene = new StartScene(sceneClickHandler);

		// animationConfigBase (prefab fields)
		animationConfigBase.to = 1;
		animationConfigBase.from = 0;
		animationConfigBase.duration = 2000;
		animationConfigBase.property = "scale";
		animationConfigBase.autoExecute = true;

		// animationConfigBase_1 (prefab fields)
		animationConfigBase_1.to = 226;
		animationConfigBase_1.from = 246;
		animationConfigBase_1.repeat = -1;
		animationConfigBase_1.property = "y";
		animationConfigBase_1.yoyo = true;

		// animationConfigBase_2 (prefab fields)
		animationConfigBase_2.to = 1;
		animationConfigBase_2.from = 0.2;
		animationConfigBase_2.repeat = -1;
		animationConfigBase_2.property = "alpha";
		animationConfigBase_2.autoExecute = true;
		animationConfigBase_2.yoyo = true;
		animationConfigBase_2.delay = 1500;

		// sceneClickHandler (prefab fields)
		sceneClickHandler.autoExecute = true;

		// startScene (prefab fields)
		startScene.sceneName = "Level";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.scene.launch("Ui");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
