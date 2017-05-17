import { Card } from 'app/blackjack/shared/card';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';
import { Deck } from 'app/blackjack/shared/deck';

describe('Deck Builder Spec', () => {

  describe('#cardGenerator', () => {
    let deck: Deck;
    let testDeckBuilder: DeckBuilder;
    let testDeck: Card[];

    beforeEach(() => {
      deck = new Deck();
      testDeckBuilder = new DeckBuilder(deck);
      testDeckBuilder.cardGenerator();
      testDeck = testDeckBuilder.deck.cards;
    });

    it('should generate a deck ', () => {
      expect(testDeck[0]).toEqual({ suit: Suit.Club, faceValue: FaceValue.Ace });
    });

  });

});
