import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class DeckBuilder {
    public constructor(
        public deck: Deck
    ) { }

    public cardGenerator(): void {
        const firstCard = { suit: Suit.Club, faceValue: FaceValue.Ace };
        const secondCard = { suit: Suit.Club, faceValue: FaceValue.Two };
        this.deck.cards.push(firstCard);
        this.deck.cards.push(secondCard);
    }
}
