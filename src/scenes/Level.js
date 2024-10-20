
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../prefabs/BackgroundPrefab.js";
import CardPrefab from "../prefabs/CardPrefab.js";
import AnimationConfigBase from "../scripts/scriptnodes/AnimationConfigBase.js";
import SceneClickHandler from "../scripts/scriptnodes/SceneClickHandler.js";
import SceneRestart from "../scripts/scriptnodes/SceneRestart.js";
import GamePlay from "../scripts/GamePlay.js";
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

		// backgroundPrefab
		const backgroundPrefab = new BackgroundPrefab(this);
		this.add.existing(backgroundPrefab);

		// cardContainer
		const cardContainer = this.add.container(640, 360);

		// card_12
		const card_12 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_12);

		// card_1
		const card_1 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_1);

		// card_2
		const card_2 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_2);

		// card_3
		const card_3 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_3);

		// card_4
		const card_4 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_4);

		// card_5
		const card_5 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_5);

		// card_6
		const card_6 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_6);

		// card_7
		const card_7 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_7);

		// card_8
		const card_8 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_8);

		// card_9
		const card_9 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_9);

		// card_10
		const card_10 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_10);

		// card_11
		const card_11 = new CardPrefab(this, 0, 0);
		cardContainer.add(card_11);

		// nice
		const nice = this.add.image(640, 360, "nice");
		nice.scaleX = 0;
		nice.scaleY = 0;

		// scaleNiceText
		const scaleNiceText = new AnimationConfigBase(nice);

		// sceneClickHandler
		const sceneClickHandler = new SceneClickHandler(scaleNiceText);

		// animationConfigBase_2
		const animationConfigBase_2 = new AnimationConfigBase(sceneClickHandler);

		// animationConfigBase_3
		const animationConfigBase_3 = new AnimationConfigBase(sceneClickHandler);

		// animationConfigBase_4
		const animationConfigBase_4 = new AnimationConfigBase(sceneClickHandler);

		// sceneRestart
		new SceneRestart(animationConfigBase_4);

		// clickToPlayAgain
		const clickToPlayAgain = this.add.image(640, 830, "clickToPlayAgain");

		// animationConfigBase
		const animationConfigBase = new AnimationConfigBase(clickToPlayAgain);

		// gamePlay
		const gamePlay = new GamePlay(this);

		// lists
		const cards = [card_11, card_10, card_9, card_8, card_7, card_6, card_5, card_4, card_3, card_2, card_1, card_12];
		const gameOverScriptNodes = [animationConfigBase, scaleNiceText];

		// card_12 (prefab fields)
		card_12.cardFrontTextureConfig = {"key":"spritesheet","frame":"Skull.png"};

		// card_1 (prefab fields)
		card_1.cardFrontTextureConfig = {"key":"spritesheet","frame":"Skull.png"};

		// card_2 (prefab fields)
		card_2.cardFrontTextureConfig = {"key":"spritesheet","frame":"Pumpkin.png"};

		// card_3 (prefab fields)
		card_3.cardFrontTextureConfig = {"key":"spritesheet","frame":"Pumpkin.png"};

		// card_4 (prefab fields)
		card_4.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cat.png"};

		// card_5 (prefab fields)
		card_5.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cat.png"};

		// card_6 (prefab fields)
		card_6.cardFrontTextureConfig = {"key":"spritesheet","frame":"Candy.png"};

		// card_7 (prefab fields)
		card_7.cardFrontTextureConfig = {"key":"spritesheet","frame":"Candy.png"};

		// card_8 (prefab fields)
		card_8.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// card_9 (prefab fields)
		card_9.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// card_10 (prefab fields)
		card_10.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// card_11 (prefab fields)
		card_11.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// scaleNiceText (prefab fields)
		scaleNiceText.to = 1.2;
		scaleNiceText.duration = 2000;
		scaleNiceText.property = "scale";

		// animationConfigBase_2 (prefab fields)
		animationConfigBase_2.to = -100;
		animationConfigBase_2.from = 360;
		animationConfigBase_2.duration = 800;
		animationConfigBase_2.property = "y";
		animationConfigBase_2.target = nice;

		// animationConfigBase_3 (prefab fields)
		animationConfigBase_3.to = 1200;
		animationConfigBase_3.from = 628;
		animationConfigBase_3.duration = 800;
		animationConfigBase_3.property = "y";
		animationConfigBase_3.target = clickToPlayAgain;

		// animationConfigBase_4 (prefab fields)
		animationConfigBase_4.to = 1200;
		animationConfigBase_4.from = 360;
		animationConfigBase_4.property = "y";
		animationConfigBase_4.target = cardContainer;

		// animationConfigBase (prefab fields)
		animationConfigBase.to = 628;
		animationConfigBase.from = 830;
		animationConfigBase.property = "y";
		animationConfigBase.delay = 2000;

		// gamePlay (prefab fields)
		gamePlay.cards = cards;
		gamePlay.cardContainer = cardContainer;
		gamePlay.gameOverScriptNodes = gameOverScriptNodes;

		this.cards = cards;
		this.gameOverScriptNodes = gameOverScriptNodes;

		this.events.emit("scene-awake");
	}

	/** @type {CardPrefab[]} */
	cards;
	/** @type {AnimationConfigBase[]} */
	gameOverScriptNodes;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
