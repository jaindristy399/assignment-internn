// 1. for loop: print the multiplication table of 5
function printMultiplicationTable() {
  let output = "-- Multiplication Table of 5 --\n";

  for (let i = 1; i <= 5; i++) {
    output += `5 x ${i} = ${5 * i}\n`;
  }

  document.getElementById("tableOutput").textContent = output.trimEnd();
}

// 2. while loop with break: find the first number > 10 divisible by 6
function findFirstNumber() {
  let number = 11;
  let output = "-- First number > 10 divisible by 6 --\n";

  while (number > 10) {
    if (number % 6 === 0) {
      output += `Found: ${number}`;
      break;
    }

    number++;
  }

  document.getElementById("breakOutput").textContent = output;
}

// 3. do...while with continue: skip even numbers and print odd numbers
function skipNumbers() {
  let number = 1;
  let output = "-- Odd numbers from 1 to 10 (even numbers skipped) --\n";

  do {
    if (number % 2 === 0) {
      number++;
      continue;
    }

    output += `${number} `;
    number++;
  } while (number <= 10);

  document.getElementById("continueOutput").textContent = output.trimEnd();
}

function runAssignment() {
  printMultiplicationTable();
  findFirstNumber();
  skipNumbers();
}

document.getElementById("rerunButton").addEventListener("click", runAssignment);
runAssignment();
