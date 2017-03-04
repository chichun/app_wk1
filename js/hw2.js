var greetMe = function(){
  console.log('Hello Dick!!');
}
greetMe();

function logGreeting(fn){
  fn();
}
logGreeting(greetMe);
