console.log('Hello!');
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const heightV = parseInt(document.querySelector('#height').value);
  const weightV = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //*
  if (heightV === '' || heightV < 0 || isNaN(heightV)) {
    results.innerHTML = `Please give a valid height ${heightV}`;
  } else if (weightV === '' || weightV < 0 || isNaN(weightV)) {
    results.innerHTML = `Please give a valid weight ${weightV}`;
  } else {
    const bmi = (weightV / ((heightV * heightV) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
    results.innerHTML = `<span>BMI: ${bmi}, You are under weight.</span>`;
  }
  else if(bmi>18.6 && bmi <24.9){
    results.innerHTML = `<span>BMI: ${bmi}, You are in normal range.</span>`;
  }
  else{
    results.innerHTML = `<span>BMI: ${bmi}, You are overweight.</span>`;
  }
  }

  // if(isNaN(heightV) && !isNaN(weightV)) {
  //   results.innerHTML=`<span>please enter a valid height number</span>`
  // }
  // else if(isNaN(weightV)&& !isNaN(heightV)){
  //   results.innerHTML=`<span>please enter a valid weight number</span>`
  // }
  // else if(isNaN(weightV) && isNaN(heightV)){
  //   results.innerHTML=`<span>please enter a valid weight and height number</span>`
  // }
  // else{
  //   const resultV=((weightV/(heightV*heightV))*10000).toFixed(2);
  //   results.innerHTML=`<span>${resultV}</span>`;
  // }
//*

});

