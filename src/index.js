module.exports = function solveEquation(equation) {
  // your implementation
  var d;
  var array = [];
  var result = [];
  var arr = equation.split(' ');
  
  for (i = 0; i<=arr.length; i++){
    if (arr[i] === "-" || arr[i] === "+" ){
    arr[i] = arr[i] + arr[i+1];	
    arr[i+1] = "";	
  }
  }
  for (i = 0; i<=arr.length; i++){
  array[i] = parseInt(arr[i], 10);
  }
  for (i=0; i<=array.length; i++){
  if (isNaN(array[i])) {
    array.splice(i,i+1);
  }}
  
  d = array[1]*array[1] - 4*array[0]*array[2];
  result[0] = Math.round(((-array[1]) + Math.sqrt(d)) / (2 * array[0]));
  result[1] = Math.round(((-array[1]) - Math.sqrt(d)) / (2 * array[0]));

  result.sort(function(a, b){return a-b;})
  return result;


}
