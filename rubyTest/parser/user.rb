def extract_user_info(data, userId)
  user_main_infos = { 'id': userId }
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

  user_main_infos['total_points'] = points
  user_main_infos['loyalty_cards'] = join_users_cards(user_loyalty_cards)

  puts JSON.pretty_generate(user_main_infos)
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
