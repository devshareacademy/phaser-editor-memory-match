
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import { MemoryMatch } from "../lib/memory-match.js"
/* END-USER-IMPORTS */

export default class GamePlay extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Card[]} */
	cards = [];
	/** @type {string} */
	cardClickEvent = "card-clicked";
	/** @type {string} */
	cardFlipCompleteEvent = "card-flip-complete";
	/** @type {Phaser.GameObjects.GameObject} */
	cardContainer;
	/** @type {ScriptNode[]} */
	gameOverScriptNodes = [];

	/* START-USER-CODE */

	// Write your code here.
	/** @type {MemoryMatch} */
	memoryMatch;

	/** @type {boolean} */
	lockInput = true;

	onCardFlipCallback(index) {
		// console.log('onCardFlipCallback invoked: ', index);
		this.cards[index].flip();
	}

	onMatchCallback(firstIndex, secondIndex) {
		// console.log('onMatchCallback invoked: ', firstIndex, secondIndex);
		// do nothing, could be used later to play sound effect or some ui animation
	}

	onMismatchCallback(firstIndex, secondIndex) {
		// console.log('onMismatchCallback invoked: ', firstIndex, secondIndex);
		// here we lock input for a brief period of time to show the cards before flipping back over
		this.lockInput = true;

		(/** @type {Phaser.Scene} */ (this.scene)).time.delayedCall(1000, () => {
			this.cards[firstIndex].flip();
			this.cards[secondIndex].flip();
			this.lockInput = false;
		});
	}

	onGameOverCallback() {
		// console.log('onGameOverCallback invoked');
		// trigger game over scene
		this.gameOverScriptNodes.forEach((scriptNode) => {
			scriptNode.execute();
		});
	}

	/**
	 * @param {Card} firstCard
	 * @param {Card} secondCard
	 * @returns {boolean}
	 */
	checkForMatch(firstCard, secondCard) {
		return firstCard.cardFrontTextureConfig.frame === secondCard.cardFrontTextureConfig.frame;
	}

	awake() {
		this.lockInput = true;
		this.memoryMatch = new MemoryMatch({
			cards: this.cards,
			onCardFlipCallback: (index) => { this.onCardFlipCallback(index); },
			onMatchCallback: (firstIndex, secondIndex) => { this.onMatchCallback(firstIndex, secondIndex); },
			onMismatchCallback: (firstIndex, secondIndex) => { this.onMismatchCallback(firstIndex, secondIndex); },
			onGameOverCallback: () => { this.onGameOverCallback(); },
			howToCheckForMatch: this.checkForMatch,
		});

		// register events

		(/** @type {Phaser.Scene} */ (this.scene)).events.on(this.cardClickEvent, (/** @type {Phaser.GameObjects.Image}*/ card) => {
			if (this.lockInput) {
				return;
			}
			this.memoryMatch.flipCard(card.name);
		});

		// start game animations
		this.dealCards();
	}

	dealCards() {
		// 640, 360 - animate container to this point
		this.cardContainer.setY(1000);

		(/** @type {Phaser.Scene} */ (this.scene)).tweens.add({
			targets: this.cardContainer,
			y: 360,
			duration: 1000,
			ease: Phaser.Math.Easing.Sine.InOut,
			onComplete: () => {
				// move cards based on their index after being shuffled
				// 160, 480, 800, 1120 --> 320 px over
				// 120, 360, 600 --> 240 px down
				this.cards.forEach((card, index) => {
					const row = Math.floor(index / 4);
					const col = index % 4;
					const x = (160 + col * 320) - 640;
					const y = (120 + row * 240) - 360;
					card.name = index;
					this.moveCard(card, x, y, index);
					//card.setPosition(x, y);
					card.name = index;
				});
			}
		});

		(/** @type {Phaser.Scene} */ (this.scene)).time.delayedCall(3000, () => {
			this.lockInput = false;
		});
	}

	moveCard(card, x, y, index) {
		(/** @type {Phaser.Scene} */ (this.scene)).tweens.add({
			targets: card,
			x,
			y,
			duration: 200,
			delay: 200 * index,
			ease: Phaser.Math.Easing.Sine.InOut,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
