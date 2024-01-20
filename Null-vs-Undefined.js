// 1st method 

let name;

console.log(name);

//2nd method 

function add(num1,num2){

  let result = num1+num2 ;
  console.log(result);

 

}


const res = add(2,3);

console.log(res);

//function ar vitore kono return type na thakai eita res a ar console a undefined dekhache ///

//3rd method 

function add_value(num1,num2){

    
    console.log(num1,num2);
  
   
  
  }
  
  //kono parameter pass na korle undefined hoye jai 

  const rest = add_value(2);
  
  console.log(rest);
  

  //4th method 

  const premik = {name : "shafin", phone : 203122};

  console.log(premik.gf);