const regex = new RegExp(/\Me/);
const str = "HI Me";
const result = str.replace(regex,"how are you");
console.log(result);