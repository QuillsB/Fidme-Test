require_relative "../../src/parser/loyalty_card"
require "test/unit"

class TestLoyaltyCard < Test::Unit::TestCase

  def test_loyalty_card
    loyaltyCard = LoyaltyCard.new()
    loyaltyCard.update({'id': 4, 'name': "Carrefour"})
    loyaltyCard.addPoints(45)
  
    assert_equal(45, loyaltyCard.getPoints())
    assert_equal(4, loyaltyCard.getId())
    assert_equal("Carrefour", loyaltyCard.getName())
  end
end
