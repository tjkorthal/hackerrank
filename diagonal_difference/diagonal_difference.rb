def diagonal_difference(arr)
  difference = first_diagonal(arr) - second_diagonal(arr)
  difference.abs
end

def first_diagonal(arr)
  arr.each_with_index.map { |sub_array, index| sub_array[index] }.reduce(&:+)
end

def second_diagonal(arr)
  arr.each_with_index.map do |sub_array, index|
    offset_index = sub_array.size - (1 + index)
    sub_array[offset_index]
  end.reduce(&:+)
end

arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

puts diagonal_difference(arr)
