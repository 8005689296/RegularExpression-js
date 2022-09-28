function Check(str){
            const regex = new RegExp(/^[A-Z][a-z]+[@][0-9]+/g);
            const r = regex.test(str);
            console.log(r);
}
const result = Check("Ritikkhan@321");
console.log(result); 