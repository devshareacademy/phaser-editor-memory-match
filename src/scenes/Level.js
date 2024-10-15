
// You can write more code here

/* START OF COMPILED CODE */

import Background from "../prefabs/Background.js";
import Card from "../prefabs/Card.js";
import AnimationConfigBase from "../scriptnodes/animations/AnimationConfigBase.js";
import SceneClickHandler from "../scriptnodes/misc/SceneClickHandler.js";
import SceneRestart from "../scriptnodes/misc/SceneRestart.js";
import GamePlay from "../scriptnodes/GamePlay.js";
import FullScreenButton from "../prefabs/FullScreenButton.js";
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

		// background
		const background = new Background(this);
		this.add.existing(background);

		// cardContainer
		const cardContainer = this.add.container(640, 360);

		// card1
		const card1 = new Card(this, 0, 0);
		cardContainer.add(card1);

		// card2
		const card2 = new Card(this, 0, 0);
		cardContainer.add(card2);

		// card3
		const card3 = new Card(this, 0, 0);
		cardContainer.add(card3);

		// card4
		const card4 = new Card(this, 0, 0);
		cardContainer.add(card4);

		// card
		const card = new Card(this, 0, 0);
		cardContainer.add(card);

		// card_1
		const card_1 = new Card(this, 0, 0);
		cardContainer.add(card_1);

		// card_2
		const card_2 = new Card(this, 0, 0);
		cardContainer.add(card_2);

		// card_3
		const card_3 = new Card(this, 0, 0);
		cardContainer.add(card_3);

		// card_4
		const card_4 = new Card(this, 0, 0);
		cardContainer.add(card_4);

		// card_5
		const card_5 = new Card(this, 0, 0);
		cardContainer.add(card_5);

		// card_6
		const card_6 = new Card(this, 0, 0);
		cardContainer.add(card_6);

		// card_7
		const card_7 = new Card(this, 0, 0);
		cardContainer.add(card_7);

		// nice
		const nice = this.add.image(640, 360, "nice");
		nice.scaleX = 0;
		nice.scaleY = 0;

		// scaleNiceText
		const scaleNiceText = new AnimationConfigBase(nice);

		// sceneClickHandler
		const sceneClickHandler = new SceneClickHandler(scaleNiceText);

		// animateCardContainerOut
		const animateCardContainerOut = new AnimationConfigBase(sceneClickHandler);

		// sceneRestart
		new SceneRestart(animateCardContainerOut);

		// animatePlayAgainTextOut
		const animatePlayAgainTextOut = new AnimationConfigBase(sceneClickHandler);

		// animateNiceTextOut_1
		const animateNiceTextOut_1 = new AnimationConfigBase(sceneClickHandler);

		// clickToPlayAgain
		const clickToPlayAgain = this.add.image(640, 831, "clickToPlayAgain");

		// animationConfigBase
		const animationConfigBase = new AnimationConfigBase(clickToPlayAgain);

		// gamePlay
		const gamePlay = new GamePlay(this);

		// fullScreenButton
		const fullScreenButton = new FullScreenButton(this, 1238, 42);
		this.add.existing(fullScreenButton);

		// lists
		const cards = [card_7, card_6, card_5, card_4, card_3, card_2, card_1, card, card4, card3, card2, card1];
		const gameOverScriptNodes = [scaleNiceText, animationConfigBase];

		// card1 (prefab fields)
		card1.cardFrontTextureConfig = {"key":"spritesheet","frame":"Skull.png"};

		// card2 (prefab fields)
		card2.cardFrontTextureConfig = {"key":"spritesheet","frame":"Skull.png"};

		// card3 (prefab fields)
		card3.cardFrontTextureConfig = {"key":"spritesheet","frame":"Pumpkin.png"};

		// card4 (prefab fields)
		card4.cardFrontTextureConfig = {"key":"spritesheet","frame":"Pumpkin.png"};

		// card (prefab fields)
		card.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cat.png"};

		// card_1 (prefab fields)
		card_1.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cat.png"};

		// card_2 (prefab fields)
		card_2.cardFrontTextureConfig = {"key":"spritesheet","frame":"Candy.png"};

		// card_3 (prefab fields)
		card_3.cardFrontTextureConfig = {"key":"spritesheet","frame":"Candy.png"};

		// card_4 (prefab fields)
		card_4.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// card_5 (prefab fields)
		card_5.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// card_6 (prefab fields)
		card_6.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// card_7 (prefab fields)
		card_7.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// scaleNiceText (prefab fields)
		scaleNiceText.to = 1.2;
		scaleNiceText.duration = 2000;
		scaleNiceText.property = "scale";

		// animateCardContainerOut (prefab fields)
		animateCardContainerOut.to = 1200;
		animateCardContainerOut.from = 360;
		animateCardContainerOut.duration = 1000;
		animateCardContainerOut.property = "y";
		animateCardContainerOut.target = cardContainer;

		// animatePlayAgainTextOut (prefab fields)
		animatePlayAgainTextOut.to = 1200;
		animatePlayAgainTextOut.from = 628;
		animatePlayAgainTextOut.duration = 800;
		animatePlayAgainTextOut.property = "y";
		animatePlayAgainTextOut.target = clickToPlayAgain;

		// animateNiceTextOut_1 (prefab fields)
		animateNiceTextOut_1.to = -100;
		animateNiceTextOut_1.from = 360;
		animateNiceTextOut_1.duration = 800;
		animateNiceTextOut_1.property = "y";
		animateNiceTextOut_1.target = nice;

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

	/** @type {Card[]} */
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
