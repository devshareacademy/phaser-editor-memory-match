function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const utils_1 = {
    shuffleArray,
};

export class MemoryMatch {
    /** Array containing card identifiers (e.g., numbers, strings). */
    #cards;
    /** Holds indices of currently flipped cards. */
    #flippedCards;
    /** Stores indices of matched cards. */
    #matchedCards;
    /** Callback function triggered when a card is flipped. */
    #onCardFlipCallback;
    /** Callback function triggered when two cards match. */
    #onMatchCallback;
    /** Callback function triggered when two cards don't match. */
    #onMismatchCallback;
    /** Callback function triggered when all cards are matched. */
    #onGameOverCallback;
    /** Tracks if the game has ended (when all matches are found). */
    #isGameOver;
    /** Function that is used for checking for equality between two cards. If not provided, a default check of
     * `firstCard === secondCard` will be used. This is useful for objects and we might want to compare the fields
     * on the two objects for equality.
     */
    #howToCheckForMatch;
    /** Function that is used for shuffling cards array in place. If not provided, a default in place shuffle
     *  using the Fisher-Yates algorithm will be used. This is useful for testing or when a client wants to use
     *  a different shuffle algorithm.
     */
    #howToShuffle;
    constructor(config) {
        this.#cards = config.cards;
        this.#flippedCards = [];
        this.#matchedCards = new Set(); // Stores indices of matched cards
        this.#onCardFlipCallback = config.onCardFlipCallback;
        this.#onMatchCallback = config.onMatchCallback;
        this.#onMismatchCallback = config.onMismatchCallback;
        this.#onGameOverCallback = config.onGameOverCallback;
        this.#howToCheckForMatch = config.howToCheckForMatch;
        this.#howToShuffle = config.howToShuffle;
        this.#isGameOver = false;
        // shuffle the provided cards
        this.#shuffle();
    }
    get isGameOver() {
        return this.#isGameOver;
    }
    get flippedCards() {
        return this.#flippedCards.slice();
    }
    get matchedCards() {
        return new Set([...this.#matchedCards]);
    }
    get cards() {
        return this.#cards.slice();
    }
    /**
     * Handles the logic of flipping a card by its index.
     * Calls the onCardFlip callback when a card is flipped.
     * Prevents flipping more than two cards or already matched cards.
     * @param {number} cardIndex - Index of the card being flipped.
     */
    flipCard(cardIndex) {
        // if game is already over, prevent flipping cards
        if (this.#isGameOver) {
            return;
        }
        // Prevent flipping more than 2 cards, flipping already matched cards, or the same card twice
        if (this.#flippedCards.length === 2 ||
            this.#matchedCards.has(cardIndex) ||
            this.#flippedCards.includes(cardIndex)) {
            return;
        }
        // Add the card index to the flipped cards array
        this.#flippedCards.push(cardIndex);
        // trigger the card flip callback if provided
        if (this.#onCardFlipCallback !== undefined) {
            this.#onCardFlipCallback(cardIndex);
        }
        // If two cards are flipped, check if they match
        if (this.#flippedCards.length === 2) {
            this.#checkForMatch();
        }
    }
    /**
     * Resets the game by shuffling the cards and clearing any flipped or matched cards.
     * Keeps the same card set but reshuffles them.
     */
    resetGame() {
        // Reshuffle the cards
        this.#shuffle();
        // clear existing flipped and matched cards
        this.#flippedCards = [];
        this.#matchedCards.clear();
    }
    /**
     * Compares the two flipped cards to determine if they match.
     * Calls onMatch if the cards match, or onMismatch if they don't.
     * Resets the flippedCards array after checking.
     */
    #checkForMatch() {
        const [firstIndex, secondIndex] = this.#flippedCards;
        const firstCard = this.#cards[firstIndex];
        const secondCard = this.#cards[secondIndex];
        let isMatch = firstCard === secondCard;
        if (this.#howToCheckForMatch !== undefined) {
            isMatch = this.#howToCheckForMatch(firstCard, secondCard);
        }
        if (isMatch) {
            // Cards match
            this.#matchedCards.add(firstIndex);
            this.#matchedCards.add(secondIndex);
            // trigger the on card match callback if provided
            if (this.#onMatchCallback !== undefined) {
                this.#onMatchCallback(firstIndex, secondIndex);
            }
            // If all cards are matched, trigger the game over callback if provided
            if (this.#matchedCards.size === this.#cards.length) {
                this.#isGameOver = true;
                if (this.#onGameOverCallback !== undefined) {
                    this.#onGameOverCallback();
                }
            }
        }
        else {
            // Cards don't match, trigger callback if provided
            if (this.#onMismatchCallback !== undefined) {
                this.#onMismatchCallback(firstIndex, secondIndex);
            }
        }
        // Reset the flipped cards array for the next turn
        this.#flippedCards = [];
    }
    #shuffle() {
        // shuffle cards using client provided function if provided
        if (this.#howToShuffle !== undefined) {
            this.#howToShuffle(this.#cards);
            return;
        }
        (0, utils_1.shuffleArray)(this.#cards);
    }
}
