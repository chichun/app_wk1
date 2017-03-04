(()=>{
  outage =20;
  var height =175;
  if (outage ==20) height=180;
  console.log(`height=${height}`);
})();
console.log(`outage=${outage}`);
//console.log(`height=${height}`); //undefined

var a=3;
var b=7;

if (a===3){
  let a=4;
  var b=9;

  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
