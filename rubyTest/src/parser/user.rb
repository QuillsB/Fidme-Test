class User
  def initialize(userId)
    @id = userId
    @total_points = 0
    @loyalty_cards = []
  end

  def addPoints(points)
    @total_points += points
  end

  def setLoyaltyCards(loyaltyCards)
    @loyalty_cards = loyaltyCards
  end

  def getId()
    @id
  end

  def getTotalPoints()
    @total_points
  end

  def getLoyaltyCards()
    @loyalty_cards
  end

  def get()
    puts JSON.pretty_generate({
      'id': @id,
      'total_points': @total_points,
      'loyalty_cards': @loyalty_cards,
    })
  end
end

def extract_user_info(data, userId)
  user = User.new(userId)
  points = 0
  user_loyalty_cards = []

  rewards = data['rewards']
  loyalty_cards = data['loyalty_cards']

  rewards.each do |reward|
    loyalty_card = {}
    if reward['user_id'] == userId.to_i
      points = points + reward['points']
      loyalty_card = {
        'id': reward['loyalty_card_id'],
        'points': reward['points'],
        'name':  extract_loyalty_card_name(loyalty_cards, reward['loyalty_card_id'])
      }
      user_loyalty_cards.append(loyalty_card)
    end
  end

  user.addPoints(points)
  user.setLoyaltyCards(join_users_cards(user_loyalty_cards))

  user.get()
end


def extract_loyalty_card_name(loyalty_cards, cardId)
  loyalty_cards.each do |loyalty_card|
    if loyalty_card['id'] == cardId.to_i
      return loyalty_card['name']
    end
  end
end

def join_users_cards(user_cards)
  loyalty_cards_points = {}
  user_cards.each do |card|
    cardId = card[:id]
    if loyalty_cards_points[cardId]
      loyalty_cards_points[cardId][:points] = loyalty_cards_points[cardId][:points] + card[:points]
    else
      loyalty_cards_points[cardId] = card
    end
  end
  return loyalty_cards_points.values
end
