function pigIt(str) {
  let myArray = str.split(" ");

  for (let i = 0; i < myArray.length; i++) {
    if (/^[a-zA-Z]+$/.test(myArray[i])) {
      myArray[i] = myArray[i].slice(1) + myArray[i][0] + "ay";
    }
  }
  return myArray.join(" ");
}

pigIt("Pig latin is cool");
pigIt("This is my string");
pigIt("O tempora o mores !");
