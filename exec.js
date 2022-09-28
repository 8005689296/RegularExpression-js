const reg = new RegExp(/\a/g);
const str = "I am a good boy";
const result = reg.exec(str);
const result2 = reg.exec(str);
console.log(result);
console.log(result);