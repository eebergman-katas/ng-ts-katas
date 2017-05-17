import { Card } from 'app/blackjack/shared/card';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';
import { Deck } from 'app/blackjack/shared/deck';

fdescribe('Deck Builder Spec', () => {

  describe('#cardGenerator', () => {
    let testDeck: Deck;
    let testDeckBuilder: DeckBuilder;
    let testCard: Card[];

    beforeEach(() => {
      testDeck = new Deck();
      testDeckBuilder = new DeckBuilder(testDeck);
      testDeckBuilder.cardGenerator();
      testCard = testDeckBuilder.deck.cards;
    });

    it('should generate the first card(Ace of Clubs)', () => {
      expect(testCard[0]).toEqual({ suit: Suit.Club, faceValue: FaceValue.Ace });
    });

    it('should generate the second card(2 of Clubs)', () => {
      expect(testCard[1]).toEqual({ suit: Suit.Club, faceValue: FaceValue.Two });
    });
  });

});
