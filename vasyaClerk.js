function tickets(peopleInLine) {
  let twentyfive = 0;
  let fifty = 0;
  let numberOfPeople = peopleInLine.length;
  let checker = "";

  for (let i = 0; i < numberOfPeople; i++) {
    if (peopleInLine[i] === 25) {
      twentyfive++;
    } else if (peopleInLine[i] === 50) {
      fifty++;
      twentyfive--;
    } else {
      if (fifty > 0) {
        fifty--;
        twentyfive--;
      } else {
        twentyfive -= 3;
      }
    }
    if (twentyfive < 0 || fifty < 0) {
      i = numberOfPeople + 1;
      checker = "NO";
    } else {
      checker = "YES";
    }
  }
  return checker;
}
tickets([25, 25, 50, 50]);
tickets([25, 100]);
tickets([25, 25, 50, 50, 100]);
tickets([
  25,
  25,
  50,
  100,
  25,
  25,
  50,
  100,
  25,
  25,
  50,
  100,
  25,
  25,
  50,
  100,
  25,
  25,
  50,
  100,
  25,
  50,
  50,
  25,
]);
