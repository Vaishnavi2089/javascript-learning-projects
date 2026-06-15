const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (isNaN(height) || height < 0) {
    results.innerHTML = 'Please enter a valid height';
    return;
  }
  
  else if (isNaN(weight) || weight < 0) {
    results.innerHTML = 'Please enter a valid weight';
    return;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //showing results
    if (bmi<18.6){
      results.innerHTML=`<span>"your BMI is: ${bmi} and you are Under Weight" </span>`;
    }
    else if (bmi>=18.6 && bmi<=24.9){
      results.innerHTML=`<span>"your BMI is: ${bmi} and Congrats!! you have a normal weight" </span>`;
    }
    else{
      results.innerHTML=`<span>"your BMI is: ${bmi} and you are Overweigth" </span>`;
    }
    // results.innerHTML=`<span>${bmi}</span>`;
  }
});
