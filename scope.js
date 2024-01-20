let bonues = 10 ; 

function sum(num1,num2){
 
    const result = num1+num2+bonues;
    console.log(result);

    return result;

}


const final = sum(1,2);

console.log(final);
//cause eita local scope a tai fucntion ar baire tekhe access korte parbo na 

//console.log(result);