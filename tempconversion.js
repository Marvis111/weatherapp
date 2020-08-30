var Fahrenheit = (celcius)=>{
    var fahrenheit = 9/5 * celcius + 32;
    return fahrenheit;
}

 var temp = Fahrenheit(0);
 console.log(temp);

 var Celcius = (fahrenheit)=>{
    var sub = (fahrenheit - 32);
     var celcius = 5/9 * sub ;
     return celcius;
 }
 var fahr = Celcius(212);

 console.log(Math.round(fahr));

  var a =302.86 - 273;
  console.log(a);
