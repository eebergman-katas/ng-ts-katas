import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class Card {
    constructor(
        public readonly suit: Suit,
        public readonly faceValue: FaceValue
    ) { }
}
