require('minitest/autorun')
require('minitest/rg')
require_relative ('../card.rb')

class CardTest < MiniTest::Test

  def setup()
    @card = Card.new("hearts", 1)

  end

  def test_suit()
    assert_equal("hearts", @card.suit)

  end

  def test_value()
    assert_equal(1, @card.value)
  end

end
