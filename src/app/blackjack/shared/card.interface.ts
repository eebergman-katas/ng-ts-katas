import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export interface ICard {
    suit: Suit;
    value: {
        faceValue: FaceValue,
        pointValue: number
    };
}
