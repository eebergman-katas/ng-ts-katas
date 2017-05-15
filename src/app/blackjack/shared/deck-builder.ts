import { Card } from 'app/blackjack/shared/card';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

export class DeckBuilder {

    public cardGenerator(): Card {
        return { suit: Suit.Club, faceValue: FaceValue.Ace };
    }
}
