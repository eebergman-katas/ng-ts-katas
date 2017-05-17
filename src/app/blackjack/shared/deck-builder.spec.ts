import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

fdescribe('Deck Builder Spec', () => {

  describe('#cardGenerator', () => {
    const firstCard: Card = new Card(Suit.Club, {
      faceValue: FaceValue.Ace,
      pointValue: 1
    });

    it('should generate a card that is a club', () => {
      const testDeckBuilder: DeckBuilder = new DeckBuilder();
      let testDeck = new Deck();
      testDeck = testDeckBuilder.cardGenerator();

      expect(testDeck.cards[0]).toEqual(firstCard);
    });


  });
});
