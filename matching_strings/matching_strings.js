function matchingStrings(strings, queries) {
  return queries.map(function(stringToMatch) {
    return strings.filter(string => string === stringToMatch).length;
  });
}

let strings = [
  'abcde',
  'sdaklfj',
  'asdjf',
  'na',
  'basdn',
  'sdaklfj',
  'asdjf',
  'na',
  'asdjf',
  'na',
  'basdn',
  'sdaklfj',
  'asdjf'
];

let queries = [
  'abcde',
  'sdaklfj',
  'asdjf',
  'na',
  'basdn'
];

console.log(matchingStrings(strings, queries));
