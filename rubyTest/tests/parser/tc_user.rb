require_relative "../../src/parser/user"
require "test/unit"

class TestUser < Test::Unit::TestCase

  def test_loyalty_card
    data = [{'id': 4, 'name': "Carrefour", 'points': 76}]

    user = User.new(3)
    assert_equal(3, user.getId())

    user.addPoints(76)
    user.setLoyaltyCards(data)
  
    assert_equal(76, user.getTotalPoints())
    assert_equal(data, user.getLoyaltyCards())
  end
end
