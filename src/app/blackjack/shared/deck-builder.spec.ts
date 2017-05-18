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
      expect(testDeck.cards[13].suit).toEqual(Suit.Diamond);
    });

    it('should generate a card that is a heart', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[26].suit).toEqual(Suit.Heart);
    });

    it('should generate a card that is a spade', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[39].suit).toEqual(Suit.Spade);
    });
  });

  describe('Create cards of each value', () => {
    beforeEach(() => {
      testDeckBuilder = new DeckBuilder();
      testDeck = new Deck();
    });

    it('should create a card that is a Ace', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[0].value.faceValue).toEqual(FaceValue.Ace);
    });

    it('should create a card that is a two', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[1].value.faceValue).toEqual(FaceValue.Two);
    });

    it('should create cards 3 - King', () => {
      testDeck = testDeckBuilder.cardGenerator();
      expect(testDeck.cards[2].value.faceValue).toEqual(FaceValue.Three);
      expect(testDeck.cards[3].value.faceValue).toEqual(FaceValue.Four);
      expect(testDeck.cards[4].value.faceValue).toEqual(FaceValue.Five);
      expect(testDeck.cards[5].value.faceValue).toEqual(FaceValue.Six);
      expect(testDeck.cards[6].value.faceValue).toEqual(FaceValue.Seven);
      expect(testDeck.cards[7].value.faceValue).toEqual(FaceValue.Eight);
      expect(testDeck.cards[8].value.faceValue).toEqual(FaceValue.Nine);
      expect(testDeck.cards[9].value.faceValue).toEqual(FaceValue.Ten);
      expect(testDeck.cards[10].value.faceValue).toEqual(FaceValue.Jack);
      expect(testDeck.cards[11].value.faceValue).toEqual(FaceValue.Queen);
      expect(testDeck.cards[12].value.faceValue).toEqual(FaceValue.King);
    });
  });

});
