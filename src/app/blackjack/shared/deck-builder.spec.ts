import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

fdescribe('Deck Builder Spec', () => {
  let testDeckBuilder: DeckBuilder;
  let testDeck: Deck;

  describe('Create cards of each suit', () => {
    beforeEach(() => {
      testDeckBuilder = new DeckBuilder();
      testDeck = new Deck(); // this can be commented out?
    });

    it('should generate a card that is a club', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[0].suit).toEqual(Suit.Club);
    });

    it('should generate a card that is a diamond', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[1].suit).toEqual(Suit.Diamond);
    });

    it('should generate a card that is a heart', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[2].suit).toEqual(Suit.Heart);
    });

    it('should generate a card that is a spade', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[3].suit).toEqual(Suit.Spade);
    });
  });

});
