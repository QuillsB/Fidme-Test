class LoyaltyCard
  def initialize()
    @id = ""
    @name = ""
    @points = 0
  end

  def update(data)
    @id = data['id']
    @name = data['name']
    @points = 0
  end

  def addPoints(newPoints)
    @points += newPoints
  end

  def get()
    puts JSON.pretty_generate({
      'id':     @id,
      'name':   @name,
      'points': @points,
    })
  end
end

def extract_loyalty_card_info(data, cardId)
  points = 0

  loyalty_cards = data['loyalty_cards']
  loyalty_card_infos = LoyaltyCard.new()

  loyalty_cards.each do |loyalty_card|
    if loyalty_card['id'] == cardId.to_i
      loyalty_card_infos.update(loyalty_card)
    end
  end

  rewards = data['rewards']

  rewards.each do |reward|
    if reward['loyalty_card_id'] == cardId.to_i
      points = points + reward['points']
    end
  end

  loyalty_card_infos.addPoints(points)
  loyalty_card_infos.get()
end
