export enum FaceValue {
    Ace,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
}

export namespace FaceValue {
    export function getPointValue(value: FaceValue): number {

        switch (value) {
            case FaceValue.Ace:
                return 11;
            case FaceValue.Jack:
            case FaceValue.Queen:
            case FaceValue.King:
                return 10;
            default:
                return value.valueOf();
        }
    }
}
