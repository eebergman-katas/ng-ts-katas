import { Card } from 'app/blackjack/shared/card';

export class Deck {
    constructor(
        public readonly deckSize = 52,
        public cards: Card[] = []
    ) { }
}
