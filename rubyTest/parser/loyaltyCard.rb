def extract_loyalty_card_info(data, cardId)
  loyalty_main_infos = { 'id': '', 'name': '', 'points': 0}
  points = 0

  loyalty_cards = data['loyalty_cards']

  loyalty_cards.each do |loyalty_card|
    if loyalty_card['id'] == cardId.to_i
      loyalty_main_infos = loyalty_card
    end
  end

  rewards = data['rewards']

  rewards.each do |reward|
    if reward['loyalty_card_id'] == cardId.to_i
      points = points + reward['points']
    end
  end

  loyalty_main_infos[:points] = points

  puts JSON.pretty_generate(loyalty_main_infos)
end