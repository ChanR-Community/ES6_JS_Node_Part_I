// Find the Mean of a Random Number Sequence
const ARRAY_LENGTH = 10
const new_arr = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.random())

function num_mean(x) {
  let num_sum = x.reduce((a,b) => a+b);
  return num_sum / x.length
}

console.log(num_mean(new_arr));

// Find the Squared Differences of Each Number from its Mean
const sqDifArr = new_arr.map(num => Math.pow(num - num_mean(new_arr), 2))
console.log(sqDifArr);
