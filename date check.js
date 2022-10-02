function Date(str){
            const regex = new RegExp(/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9])\/(?:[0-9]{2})?[0-9]{2}$/);
            if(regex.test(str)){
                        console.log("valid date");
            }
            else {
                        console.log("invalid date");
            }
}
const res = Date("32/12/2022");
console.log(res);

            

