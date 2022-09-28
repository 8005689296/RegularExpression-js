//Write a JavaScript function to check whether a given value is alphanumeric or not.

function alphanumeric(str){
            const regex = new RegExp(/^[0-9]+[a-z]/g);
            if(str.match(regex)){
                        console.log("Its a numeric value");
            }else {
                        console.log("its not alphanumeric value");
            }
}
alphanumeric("3456abvg");