import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class DeckBuilder {

    public cardGenerator(): Deck {
        const deck: Deck = new Deck();

        for (const genSuit in Suit) {
            if (genSuit.length > 2) {
                for (const genValue in FaceValue) {
                    if (genValue.length > 2) {
                        const genCard = new Card(this.suitLookup(genSuit), {
                            faceValue: this.faceValueLookup(genValue),
                            pointValue: 1
                        });
                        deck.cards.push(genCard);
                    }
                }
            }
        }
        return deck;
    }

    // export namespace function on the enum?
    private suitLookup(suitLookup: string): Suit {
        switch (suitLookup) {
            case 'Club':
                return Suit.Club;
            case 'Diamond':
                return Suit.Diamond;
            case 'Heart':
                return Suit.Heart;
            default:
                return Suit.Spade;
        }
    }

    private faceValueLookup(faceValueLookup: string): FaceValue {
        switch (faceValueLookup) {
            case 'Ace':
                return FaceValue.Ace;
            case 'Two':
                return FaceValue.Two;
            case 'Three':
                return FaceValue.Three;
            case 'Four':
                return FaceValue.Four;
            case 'Five':
                return FaceValue.Five;
            case 'Six':
                return FaceValue.Six;
            case 'Seven':
                return FaceValue.Seven;
            case 'Eight':
                return FaceValue.Eight;
            case 'Nine':
                return FaceValue.Nine;
            case 'Ten':
                return FaceValue.Ten;
            case 'Jack':
                return FaceValue.Jack;
            case 'Queen':
                return FaceValue.Queen;
            default:
                return FaceValue.King;
        }
    }

}
