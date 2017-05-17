import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class DeckBuilder {

    public cardGenerator(): Deck {
        const deck: Deck = new Deck();
        const firstCard = new Card(Suit.Club, {
            faceValue: FaceValue.Ace,
            pointValue: 1
        });
        deck.cards.push(firstCard);
        return deck;
    }
}
