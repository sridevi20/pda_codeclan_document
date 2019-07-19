### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
#  Testing task 2 code:
#
# # Carry out dynamic testing on the code below.
# # Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
    if card1.value > card2.value
      return card.name
    else
      card2
    end
  end


  def self.cards_total(card)
    total
    for card in cards
      total += card.value
      return "You have a total of" + total
    end

  end


1.) Return function name wrong  checkforAce () function , should be return small  letter in  (check_for_ace ())
  2.) In checkforAce ()method ,equal_to sign is missing in if condition.
 3.) In highest_card () method , defined method  def spell wrong .
 4.) (,) is missing between parameters and method closed with an extra end in highest_card() method.
 5.) Should be return card1  value instead card.name

 6.) "total"  variable should be intialized with  total = 0 -->
 7.) Missing intialise property cards[] in class CardGame . which holds (suit and values)

 8.)  defined wrong method name  in self.cards_total () should be return cards_total ()

 9.)In cards_total (), return value should be returned once the for loop is finished.

 10.)In cards_total(), return value should be written total in string imterpolation to concatenate with string .
