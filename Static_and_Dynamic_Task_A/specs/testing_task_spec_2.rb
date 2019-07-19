require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @cardgame = CardGame.new()
    @card1 = Card.new("diamond", 1)
    @card2 = Card.new("club", 3)
    @card3 = Card.new("heart", 6)
    @cards = [@card1, @card2, @card3]
  end

  def test_check_for_ace()
    result = @cardgame.check_for_ace(@card1)
    assert_equal(true, result)
  end
  def test_highest_card()
    result = @cardgame.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end


  def test_cards_total()
    result = @cardgame.cards_total(@cards)
    assert_equal("You have a total of 10", result)

  end
end
