import { Card } from 'app/blackjack/shared/card';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

describe('Deck Builder Spec', () => {

  describe('#cardGenerator', () => {
    it('should generate a card', () => {
      const testDeckBuilder = new DeckBuilder();
      const testCard = testDeckBuilder.cardGenerator();
      expect(testCard).toEqual({ suit: Suit.Club, faceValue: FaceValue.Ace });
    });
  });

});
