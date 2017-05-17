export enum Suit {
    Club,
    Diamond,
    Heart,
    Spade
}

export namespace Suit {
    export function getSuit(search: string): Suit {
        switch (search.toLowerCase()) {
            case 'club':
            return Suit.Club;
        }
        return Suit.Spade;
    }
}
