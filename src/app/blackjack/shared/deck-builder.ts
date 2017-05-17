import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class DeckBuilder {
    constructor(
        public deck: Deck
    ) { }

    public cardGenerator(): void {
        for (const genSuit in Suit) {
            if (genSuit.length > 2) {

                const genCard: Card = {
                    suit: Suit.getSuit(genSuit),
                    value: {
                        faceValue: FaceValue.Eight,
                        pointValue: 8
                    }
                };
                this.deck.cards.push(genCard);
            }
        }
    }
}
