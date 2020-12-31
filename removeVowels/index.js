function removeVowels(str) {
    return str.replace(/[aeiou]/ig, '');
}

const result = removeVowels('arghuny');

console.log(result);