const scoreInput = document.getElementById("score");
const scoreValue = document.getElementById("score-value");
const scoreOutput = document.getElementById("score-output");
const gradeOutput = document.getElementById("grade-output");
const statusOutput = document.getElementById("status-output");
const messageOutput = document.getElementById("message");
const copyMessage = document.getElementById("copy-message");

let formattedResult = "";

function checkGrade() {
  // Convert the input text to a number explicitly.
  const score = Number(scoreInput.value);

  // Use if...else to validate the score and decide its grade category.
  if (scoreInput.value.trim() === "" || !Number.isFinite(score) || score < 0 || score > 100) {
    messageOutput.textContent = "Please enter a score from 0 to 100.";
    return false;
  } else {
    let grade;

    // Use switch to determine the letter grade.
    switch (true) {
      case (score >= 90):
        grade = "A";
        break;
      case (score >= 80):
        grade = "B";
        break;
      case (score >= 70):
        grade = "C";
        break;
      case (score >= 60):
        grade = "D";
        break;
      default:
        grade = "F";
    }

    // Use a ternary operator to determine pass/fail status.
    const status = score >= 50 ? "Passed" : "Failed";

    scoreValue.textContent = score;
    scoreOutput.textContent = score;
    gradeOutput.textContent = grade;
    statusOutput.textContent = status;
    statusOutput.className = status === "Passed" ? "passed" : "failed";
    messageOutput.textContent = "Grade calculated successfully.";

    formattedResult = `Score: ${score}\nGrade: ${grade}\nStatus: ${status}`;
    console.log(formattedResult);
    copyMessage.textContent = "";
    return true;
  }
}

function enterScoreUsingPrompt() {
  const answer = prompt("Enter your test score (0–100):", scoreInput.value);
  if (answer === null) {
    messageOutput.textContent = "Input cancelled.";
    return;
  }
  scoreInput.value = answer.trim();
  checkGrade();
}

function resetExample() {
  scoreInput.value = 85;
  checkGrade();
}

async function copyResult() {
  if (!formattedResult && !checkGrade()) return;
  try {
    await navigator.clipboard.writeText(formattedResult);
    copyMessage.textContent = "Result copied to clipboard!";
  } catch (error) {
    copyMessage.textContent = "Clipboard access unavailable. You can copy the result from the Console.";
  }
}

document.getElementById("check").addEventListener("click", checkGrade);
document.getElementById("prompt-score").addEventListener("click", enterScoreUsingPrompt);
document.getElementById("reset").addEventListener("click", resetExample);
document.getElementById("copy").addEventListener("click", copyResult);

// Display the expected example on page load.
checkGrade();
