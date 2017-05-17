import { FaceValue } from 'app/blackjack/shared/face-value.enum';

fdescribe('FaceValue Spec', () => {

    describe('#pointValue', () => {
        it('should assign a value of 11 to a Suit.Ace', () => {
            const testPointValue = FaceValue.getPointValue(FaceValue.Ace);
            expect(testPointValue).toEqual(11);
        });

        it('should assign a value of 2 to a Suit.Two', () => {
            const testPointValue = FaceValue.getPointValue(FaceValue.Two);
            expect(testPointValue).toEqual(2);
        });
    });
});
