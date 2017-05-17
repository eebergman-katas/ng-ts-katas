## Blackjack
#

### Iteration 1

- Players are dealt one card in two rounds trying to total 21
- Each player gets one card face-up and one card face-down
- Players may request another card(hit) until they get a 21(Blackjack) or go over 21(bust)

#### Feature: Generate a deck
> A deck has
- 52 cards
- Four suits, Clubs, Diamonds, Hearts, Spades
- Ace, 2 - 10, Jack, Queen, King
- No duplicates

#### Feature: Create a dealer
> The dealer plays for the house, and uses the generator to make a new deck
- Should have a name 'Dealer'
- Should know wins, loses, draws
- Must play after the other players
- If their total is 16 or lower they must hit
- If their total is 17 or higher they must stay
- Must do everything to no bust or go over 21
- Must generate a new deck when the deck runs out or there would not be enough cards are another round

#### Feature: Create a player
> Player is trying to beat the dealer
- Should have a name
- Should know wins, loses, draws
- Should play based on the dealer's face up card
- When the dealer has 
    - a "7 - Ace" should aim for 18
    - a "4, 5, 6" should aim for 12 or higher
    - a "2, 3" should aim for 13 or higher

#### Feature: Play
> Play Blackjack!!
- Dealer should generate a new deck
- should add three players to the 'table'
- play should continue until user ends the game

> After the deal
- Play begins with the first player and continues moves to the second after the first gets a blackjack, busts, or stands
-

#

### Iteration 2
> Casino Rules

- Players are dealt one card in two rounds trying to total 21
- Each player gets both cards face-up
- The dealer's second card is face-down
- Players may request another card(hit) until they get a 21(Blackjack) or go over 21(bust)

#### Feature: Generate a 6 deck, deck

- All of the cards are shuffled together
- Player number one chooses the 'cut' the last 60 - 70 cards that shouldn't be played the dealer will regenerate and shuffle 6 decks



