require 'optparse'
require 'json'

require './parse'

options = {}
result = {}

OptionParser.new do |opt|
  opt.on('--user_id USER_ID') { |o| options[:user_id] = o }
  opt.on('--loyalty_card_id LOYALTY_CARD_ID') { |o| options[:loyalty_card_id] = o }
end.parse!

data = get_json_file()

if options[:user_id]
  extract_user_info(data, options[:user_id])
end

if options[:loyalty_card_id]
  extract_loyalty_card_info(data, options[:loyalty_card_id])
end
