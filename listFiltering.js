// Case -- https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

const listFilter = (str) => {
  let result = [];
  str.filter((el) => { (Number.isInteger(el)) ? result.push(el) : 0; });
  return result;
}

console.log(listFilter([1, '-12', 2, 3, 'a', -1, '123']))