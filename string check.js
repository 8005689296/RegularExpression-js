function Check(str){
            const regex = new RegExp(/^[A-Z][a-z]\s[a-z]+\s[a-z]{2}\s[a-z]+\s[a-z]+$/g);
            if(str.match(regex)){
                        console.log("valid string");
            }else {
                        console.log("Invalid string");
            }
            

}
Check("Hi i am ritik khandelwal");