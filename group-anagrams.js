function sortWord(s) {
  let str = s.split("");
  for (let i = 0, lenI = str.length; i < lenI; i++) {
    for (let j = 0, lenJ = str.length - i; j < lenJ; j++) {
      if (str[j + 1] && str[j].charCodeAt() > str[j + 1].charCodeAt()) {
        const temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
      }
    }
  }

  return str.join("");
}

function groupAnagrams(arr) {
  const sortedWords = [];
  const anagrams = {};

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].length) {
      const word = sortWord(arr[i]);
      sortedWords.push(word);
    }
  }

  for (let i = 0, len = sortedWords.length; i < len; i++) {
    if (!anagrams[sortedWords[i]]) {
      anagrams[sortedWords[i]] = [arr[i]];
    } else {
      anagrams[sortedWords[i]].push(arr[i]);
    }
  }

  return Object.values(anagrams);
}

let arr = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
console.log(groupAnagrams(arr));
