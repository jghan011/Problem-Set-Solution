// // PROBLEM 0 //
function isNumberDivisible() {
  var total = 44;

  for (var x = 1; x <= total; x++) {
    if (x % 2 === 0 && x % 6 !=0) {
      console.log("foo");
    } 

  else if (x % 3 === 0 && x % 6 != 0) {
      console.log("bar");
    }

    else if (x % 6 === 0) {
      console.log("baz");
    } else {
      console.log(x);
    }
  }
}
isNumberDivisible();

// PROBLEM 1 //

function reverseCharactersButNotWords(inputSentence) {
  var splitString = inputSentence.split("");

    var reverseString = splitString.reverse();

   var joinArray = reverseString.join("");

    var splitAgain = joinArray.split(" ");

     var reverseAgain = splitAgain.reverse();

  var joinAgain = reverseAgain.join(" ");



  

  console.log(joinAgain);
   return joinAgain;
}
reverseCharactersButNotWords("the cat is fat");
