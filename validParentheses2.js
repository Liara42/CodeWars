function validParentheses(parens) {
  let myArray = parens.split("");
  let counter = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == "(") {
      counter++;
    } else if (myArray[i] == ")") {
      counter--;
    }
    if (counter < 0) {
      return false;
    }
  }
  return counter === 0;
}

validParentheses("(");
validParentheses(")");
validParentheses("()");
validParentheses("())");
validParentheses(")(()))");
validParentheses("(())((()())())");
