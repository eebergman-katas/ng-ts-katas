import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class DeckBuilder {

    public cardGenerator(): Deck {
        const deck: Deck = new Deck();

        for (const genSuit in Suit) {
            if (genSuit.length > 2) {
                const firstCard = new Card(suitLookup(genSuit), {
                    faceValue: FaceValue.Ace,
                    pointValue: 1
                });
                deck.cards.push(firstCard);
            }
        }
        return deck;
    }
}
// class method or function
// export namespace method on the enum
function suitLookup(suitLookup: string): Suit {
    switch (suitLookup.toLowerCase()) {
        case 'club':
            return Suit.Club;
        case 'diamond':
            return Suit.Diamond;
        case 'heart':
            return Suit.Heart;
        default:
            return Suit.Spade;
    }
}

