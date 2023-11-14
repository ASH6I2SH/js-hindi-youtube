console.log('Hello!');
console.log('Hello!');
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  //*
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  
  // const date=new Date();
  // const time=date.toLocaleTimeString();
  // const day=date.toLocaleDateString();
  // clock.innerHTML=`${time}</br>${day}`;
  //*

}, 1000);

 
