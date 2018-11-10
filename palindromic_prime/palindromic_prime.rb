num = ARGV.first.to_i
require 'prime'
p Prime.lazy.select { |prime| prime.to_s.eql?(prime.to_s.reverse) }.first(num)
