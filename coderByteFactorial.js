function factorial(number) {
   if(number === 0 ||
      number === 1) {
      return 1;
   }

   var factors = [];
   while(number) {
      factors.push(number);
      number--;
   }
   return factors.reduce(function(a,b) { return a * b });
}

var number = document.getElementById("Number").innerHTML;
document.getElementById("Factorial").innerHTML = factorial(parseInt(number));