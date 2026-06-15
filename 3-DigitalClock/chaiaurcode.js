const clock=document.querySelector('#clock');
// let date= new Date();
// console.log(date.toLocaleString())//prints date time on console
setInterval(function(){
   let date=new Date();
   clock.innerHTML=date.toLocaleTimeString();

},1000);