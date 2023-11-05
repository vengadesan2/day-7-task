var recevice = new XMLHttpRequest();
recevice.open("GET","https://restcountries.com/v3.1/all",true)
recevice.send();
recevice.onload = function(){
    var data =  recevice.response;
 var result = JSON.parse(data);    
 var res = result.reduce((acc,cv)=>acc+cv.population,0)
console.log(res);
}


// Get all the countries from Asia continent /region using Filter function

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data1 = request1.response;
   var result1 = JSON.parse(data1);
   var res1 = result1.filter((x)=>x.currencies && x.currencies.USD)
  res1.forEach((x1)=>console.log(x1.name.common))
}


//! 2 filter and map country name with population less than 2 laks
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data3 = request2.response;
   var result3 = JSON.parse(data3);
   var res3 = result3.filter((x)=>x.population<200000)
   res3.map((ele)=>console.log(ele.name.common))


}
// Print the following details name, capital, flag, using forEach function
var request6 = new XMLHttpRequest();
request6.open("GET","https://restcountries.com/v3.1/all",true)
request6.send();
request6.onload = function(){ 
    var data7 = request6.response;
   var result5 = JSON.parse(data7);
   var lop1 = result5.filter((lop)=>lop.capital)
    lop1.forEach((lop2)=>console.log(lop2.flag))
}
 // us dollar an currency
 var request5 = new XMLHttpRequest();
 request5.open("GET","https://restcountries.com/v3.1/all",true)
 request5.send();
 request5.onload = function(){
     var data5 = request5.response;
    var request0 = JSON.parse(data5);
       let curren  = request0.filter((dole)=>dole.currencies && dole.currencies.USD)
        curren.forEach((dole)=>console.log( dole.name.common))
 }
