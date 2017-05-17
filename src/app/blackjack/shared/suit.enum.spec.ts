import { Suit } from 'app/blackjack/shared/suit.enum';

fdescribe('Suit Enum Spec', () => {

  describe('#getSuit', () => {
      let getSuitReturn: Suit;

    it('should return a Suit.Club when given "club" ', () => {
        getSuitReturn = Suit.getSuit('club');
        getSuitReturn = Suit.getSuit('Club');
      expect(getSuitReturn).toEqual(Suit.Club);
    });
  });
});
