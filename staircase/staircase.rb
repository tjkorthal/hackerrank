require 'pry'

def staircase(n)
  Range.new(1, n).each do |stairs|
    puts ('#' * stairs).rjust(n)
  end
end

staircase 6
