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
                        const genCard = new Card(this.suitSearch(genSuit), {
                            faceValue: this.faceValueSearch(genValue),
                            pointValue: this.pointValueSearch(this.faceValueSearch(genValue))
                        });
                        deck.cards.push(genCard);
                    }
                }
            }
        }
        return deck;
    }

    // export namespace function on the enum?
    private suitSearch(genSuit: string): Suit {
        switch (genSuit) {
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

    private faceValueSearch(genValue: string): FaceValue {
        switch (genValue) {
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

    private pointValueSearch(genValue: FaceValue): number {
        switch (genValue) {
            case FaceValue.Ace:
                return 11;
            case FaceValue.Jack:
            case FaceValue.Queen:
            case FaceValue.King:
                return 10;
            default:
            return genValue;
        }
    }

}
