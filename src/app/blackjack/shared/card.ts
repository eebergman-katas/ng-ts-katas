import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { ICard } from 'app/blackjack/shared/card.interface';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class Card implements ICard {
    constructor(
        public readonly suit: Suit,
        public readonly value: {
            faceValue: FaceValue,
            pointValue: number
        }
    ) { }
}
