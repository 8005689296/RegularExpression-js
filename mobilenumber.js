function valid(str){
            const regex = new RegExp(/^[9][1][-][6-9][0-9]+[-][0-9]{4}[-][0-9]{2}/g);
            if(str.match(regex)){
                        console.log("phone number valid ");
            }else {
                        console.log("Invalid phone number");
            }
}
const y = valid("91-8005-6892-96");
console.log(y);