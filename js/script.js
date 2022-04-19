  /* This function converts celsius to farenheit. 
*/

function Calculate_cel_to_far() {
  // input
  let Cel = parseFloat( (document.getElementById('Cel-to-far-here').value));
  
  // Equation
  let Cel_to_far_answer = 9/5  *  Cel  +  32;
  
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Cel-to-far-results').innerHTML = "Your temperature in celsius rounded to the nearest degree is " + Cel_to_far_answer.toFixed(0)  +  "°"


}

  /* This function converts farenheit to celsius. 
*/

function Calculate_far_to_cel() {
  // input
  let Far = parseFloat( (document.getElementById('Far-to-cel-here').value));

  // Equation
  let Far_to_cel_answer = 5/9  *  (Far  -  32);
  
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Far-to-cel-results').innerHTML = "Your temperature in farenheit rounded to the nearest degree is " + Far_to_cel_answer.toFixed(0)  +  "°."


  // unused/currently testing code
  // let Pyramid_volume = float(5)/float(9) * (Far-32);

  
}
