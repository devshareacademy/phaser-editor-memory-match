
// You can write more code here

/* START OF COMPILED CODE */

import Background from "../prefabs/Background.js";
import AnimationConfigBase from "../scriptnodes/animations/AnimationConfigBase.js";
import FullScreenButton from "../prefabs/FullScreenButton.js";
import AudioPrefab from "../scriptnodes/misc/AudioPrefab.js";
import SceneClickHandler from "../scriptnodes/misc/SceneClickHandler.js";
import StopGameObjectTweens from "../scriptnodes/animations/StopGameObjectTweens.js";
import StartScene from "../scriptnodes/misc/StartScene.js";
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
		const background = new Background(this);
		this.add.existing(background);

		// title
		const title = this.add.image(640, 246, "title");
		title.scaleX = 0;
		title.scaleY = 0;

		// scaleTitle
		const scaleTitle = new AnimationConfigBase(title);

		// yoyoY
		const yoyoY = new AnimationConfigBase(scaleTitle);

		// clickToPlay
		const clickToPlay = this.add.image(640, 521, "clickToPlay");
		clickToPlay.alpha = 0;
		clickToPlay.alphaTopLeft = 0;
		clickToPlay.alphaTopRight = 0;
		clickToPlay.alphaBottomLeft = 0;
		clickToPlay.alphaBottomRight = 0;

		// fadeIn
		const fadeIn = new AnimationConfigBase(clickToPlay);

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 1238, 42);
		this.add.existing(fullScreenButton);

		// audioPrefab
		const audioPrefab = new AudioPrefab(this);

		// sceneClickHandler
		const sceneClickHandler = new SceneClickHandler(this);

		// stopTitleTextTweens
		const stopTitleTextTweens = new StopGameObjectTweens(sceneClickHandler);

		// moveTitleTextOut
		const moveTitleTextOut = new AnimationConfigBase(stopTitleTextTweens);

		// startScene
		const startScene = new StartScene(moveTitleTextOut);

		// moveAltText
		const moveAltText = new AnimationConfigBase(stopTitleTextTweens);

		// lists
		const textGameObjects = [clickToPlay, title];

		// scaleTitle (prefab fields)
		scaleTitle.to = 1;
		scaleTitle.duration = 2000;
		scaleTitle.property = "scale";
		scaleTitle.autoExecute = true;

		// yoyoY (prefab fields)
		yoyoY.to = 226;
		yoyoY.from = 246;
		yoyoY.repeat = -1;
		yoyoY.property = "y";
		yoyoY.yoyo = true;

		// fadeIn (prefab fields)
		fadeIn.to = 1;
		fadeIn.from = 0.2;
		fadeIn.repeat = -1;
		fadeIn.property = "alpha";
		fadeIn.autoExecute = true;
		fadeIn.yoyo = true;
		fadeIn.delay = 1500;

		// audioPrefab (prefab fields)
		audioPrefab.key = "3-Midnight-Candy-Chase-loop";
		audioPrefab.loop = true;

		// sceneClickHandler (prefab fields)
		sceneClickHandler.autoExecute = true;

		// stopTitleTextTweens (prefab fields)
		stopTitleTextTweens.targetGameObjects = textGameObjects;

		// moveTitleTextOut (prefab fields)
		moveTitleTextOut.to = -50;
		moveTitleTextOut.from = 246;
		moveTitleTextOut.duration = 800;
		moveTitleTextOut.property = "y";
		moveTitleTextOut.target = title;

		// startScene (prefab fields)
		startScene.sceneName = "Level";

		// moveAltText (prefab fields)
		moveAltText.to = 800;
		moveAltText.from = 521;
		moveAltText.duration = 800;
		moveAltText.property = "y";
		moveAltText.target = clickToPlay;

		this.textGameObjects = textGameObjects;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image[]} */
	textGameObjects;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
