function Check(str){
            const regex = new RegExp(/^[a-z]+[0-9]+[@][a-z]+[.][a-z]+$/g);
            if(str.match(regex)){
                        console.log("emailid exist");
            }else {
                        console.log("does not exist")
            }
}
const y = Check("ritikkhandelwal650@gmail.com");
console.log(y);