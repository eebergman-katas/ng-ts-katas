import { FaceValue } from 'app/blackjack/shared/face-value.enum';

describe('FaceValue Spec', () => {

    describe('#pointValue', () => {
        let testPointValue: number;

        it('should assign a value of 11 to a Suit.Ace', () => {
            testPointValue = FaceValue.getPointValue(FaceValue.Ace);
            expect(testPointValue).toEqual(11);
        });

        it('should assign the same number value to each FaceValue', () => {
            testPointValue = FaceValue.getPointValue(FaceValue.Two);
            expect(testPointValue).toEqual(2);
            testPointValue = FaceValue.getPointValue(FaceValue.Six);
            expect(testPointValue).toEqual(6);
        });

        it('should assign a value of 10 to J, Q, K', () => {
            const jack = FaceValue.getPointValue(FaceValue.Jack);
            const queen = FaceValue.getPointValue(FaceValue.Queen);
            const king = FaceValue.getPointValue(FaceValue.King);
            expect(jack).toEqual(10);
            expect(queen).toEqual(10);
            expect(king).toEqual(10);
        });
    });
});
