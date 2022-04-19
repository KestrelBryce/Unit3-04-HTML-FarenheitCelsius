  /* This function calculates the volume of a pyramid. 
*/

function Calculate_volume() {
  // input
  let Side_a = parseFloat( (document.getElementById('Side-a-here').value));

  let Side_b = parseFloat( (document.getElementById('Side-b-here').value));
  
  let Height = parseFloat( (document.getElementById('Height-here').value));
  
  // naming constants and stuff
  const Sixth_rate = 0.1666666667
  
  let Pyramid_volume = Sixth_rate * Side_a * Side_b * Height;
  // remember to use .toFixed(2) to round to two decimal places
  
  // output for volume
  document.getElementById('Pyramid-results').innerHTML = "Your volume rounded to the nearest hundreth is " + Pyramid_volume.toFixed(2) + "cm<sup>3</sup>"


  // unused code

  // parseInt
  // document.getElementById('Pyramid-results').innerHTML = "Your volume rounded to the nearest hundreth is " + Pyramid_volume.toFixed(2) + "cm."
  // let Pyramid_volume = Side_a * Side_b * Height * Sixth_rate;
  // let Pyramid_volume = Side_a * Side_b * Third_rate * Height;
  // const Third_rate = 0.3
  

}