import { Card } from 'app/blackjack/shared/card';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';
import { Deck } from 'app/blackjack/shared/deck';

fdescribe('Deck Builder Spec', () => {

  describe('#cardGenerator', () => {
    it('should generate the first card(Ace of Clubs)', () => {
      const testDeckBuilder = new DeckBuilder(new Deck);
      testDeckBuilder.cardGenerator();
      const testCard = testDeckBuilder.deck.cards[0];
      expect(testCard).toEqual({ suit: Suit.Club, faceValue: FaceValue.Ace });
    });

    it('should generate the second card(2 of Clubs)', () => {
      const testDeckBuilder = new DeckBuilder(new Deck);
      testDeckBuilder.cardGenerator();
      const testCard = testDeckBuilder.deck.cards[1];
      expect(testCard).toEqual({ suit: Suit.Club, faceValue: FaceValue.Two });
    });
  });

});
