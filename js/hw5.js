function b1 (){
  //var myVar;
  console.log(myVar);
}
function a1 (){
  var myVar =1;
  b1();
  console.log(myVar);
}
var myVar = 3;
console.log(myVar);
a1();

function a1(){
  var myVar = 1;
  function b1(){
    // var myVar();
    console.log(myVAr);
  }
  b1();
  console.log(myVar);
}

var firstname = 'Chi';
var addSurname =()=>{
  var surname = 'Hsieh';
  var fullname=firstname+' '+surname;
  firstname ='Chun';
  console.log(fullname);
}
