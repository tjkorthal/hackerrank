def compareTheTriplets(a, b)
  puts [get_score(a, b), get_score(b, a)]
end

def add_point(a, b)
  a > b ? 1 : 0
end

def get_score(a, b)
  a.zip(b).map do |first, second|
    add_point(first, second)
  end.reduce(0, :+)
end

a = [5, 6, 7]
b = [3, 6, 10]

compareTheTriplets(a, b)
