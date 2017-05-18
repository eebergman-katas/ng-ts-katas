import { Card } from 'app/blackjack/shared/card';
import { Deck } from 'app/blackjack/shared/deck';
import { DeckBuilder } from 'app/blackjack/shared/deck-builder';
import { FaceValue } from 'app/blackjack/shared/face-value.enum';
import { Suit } from 'app/blackjack/shared/suit.enum';

fdescribe('Deck Builder Spec', () => {
  let testDeckBuilder: DeckBuilder;
  let testDeck: Deck;

  beforeEach(() => {
    testDeckBuilder = new DeckBuilder();
    testDeck = new Deck(); // this can be commented out?
    testDeck = testDeckBuilder.cardGenerator();
  });

  describe('Create cards of each suit', () => {
    it('should generate a card that is a club', () => {
      expect(testDeck.cards[0].suit).toEqual(Suit.Club);
    });

    it('should generate a card that is a diamond', () => {
      expect(testDeck.cards[13].suit).toEqual(Suit.Diamond);
    });

    it('should generate a card that is a heart', () => {
      expect(testDeck.cards[26].suit).toEqual(Suit.Heart);
    });

    it('should generate a card that is a spade', () => {
      expect(testDeck.cards[39].suit).toEqual(Suit.Spade);
    });
  });

  describe('Create cards of each value', () => {
    it('should create a card has a FaceValue of Ace', () => {
      expect(testDeck.cards[0].value.faceValue).toEqual(FaceValue.Ace);
    });

    it('should create cards with FaceValue of Two - King', () => {
      expect(testDeck.cards[1].value.faceValue).toEqual(FaceValue.Two);
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

  describe('Create cards with each pointValue', () => {
    it('should create the Ace with a point value of 11', () => {
      expect(testDeck.cards[0].value.pointValue).toEqual(11);
    });

    it('should create the J, Q, K with a point value of 10', () => {
      expect(testDeck.cards[10].value.pointValue).toEqual(10);
      expect(testDeck.cards[11].value.pointValue).toEqual(10);
      expect(testDeck.cards[12].value.pointValue).toEqual(10);
    });

    it('should create the number cards with their same pointValue', () => {
      expect(testDeck.cards[1].value.pointValue).toEqual(2);
      expect(testDeck.cards[4].value.pointValue).toEqual(5);
    });
  });

  describe('Finally', () => {
    it('The generated deck length should be 52', () => {
      expect(testDeck.cards.length).toEqual(52);
    });

    it('should create the 4 of Diamonds as the 17th card', () => {
      expect(testDeck.cards[16].suit).toEqual(Suit.Diamond);
      expect(testDeck.cards[16].value.faceValue).toEqual(FaceValue.Four);
      expect(testDeck.cards[16].value.pointValue).toEqual(4);
    });
  });

});
