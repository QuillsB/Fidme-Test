require 'optparse'
require 'json'

require './src/parser/user'
require './src/parser/loyaltyCard'

options = {}
result = {}

OptionParser.new do |opt|
  opt.on('--user_id USER_ID') { |o| options[:user_id] = o }
  opt.on('--loyalty_card_id LOYALTY_CARD_ID') { |o| options[:loyalty_card_id] = o }
end.parse!

def get_json_file()
  file = File.read('./src/input.json')

  data_hash = JSON.parse(file)

  return data_hash
end

data = get_json_file()

if options[:user_id]
  extract_user_info(data, options[:user_id])
end

if options[:loyalty_card_id]
  extract_loyalty_card_info(data, options[:loyalty_card_id])
end
