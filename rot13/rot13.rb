require 'pry'

UPPER_ALPHA = ('A'..'Z').to_a.freeze
LOWER_ALPHA = ('a'..'z').to_a.freeze
UPPER_CIPHER = UPPER_ALPHA.rotate(13).freeze
LOWER_CIPHER = LOWER_ALPHA.rotate(13).freeze
MAP =
  Hash.new { |h, k| h[k] = k }.tap do |map|
    UPPER_ALPHA.zip(UPPER_CIPHER).each { |initial, rotated| map[initial] = rotated }
    LOWER_ALPHA.zip(LOWER_CIPHER).each { |initial, rotated| map[initial] = rotated }
  end

def rot13(secret_messages)
  secret_messages.map do |phrase|
    phrase.split('').map { |char| MAP[char] }.join
  end
end

puts rot13(
  ["Why did the chicken cross the road?",
    "Gb trg gb gur bgure fvqr!"]
)
