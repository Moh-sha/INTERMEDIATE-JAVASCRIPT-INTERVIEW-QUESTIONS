const Students = [

{id :21 , name : "Shafin"},
{id :23 , name : "Ratul"},
{id :30 , name : "Sizzid"},
{id :10 , name : "Konak"},


];


 var res = Students.map(x=>x.id);
 
 var rest = Students.map(x=>x.name);
 console.log(res);
 console.log(rest);
Students.push({id:10,name:'ratul'});


for(var i=0 ; i<Students.length ;i++){

        var element = Students[i];
      var result =  element.id;
     console.log(result);
     var names = element.name ;
     console.log(names);
     //Students.push({id:10,name:'ratul'});
}
