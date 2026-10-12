const result = document.getElementById("result");
const status = document.getElementById("status");

function runAssignment() {
  // Declare variables using var, let, and const.
  var userName = document.getElementById("name").value.trim() || "Guest";
  let age = Number(document.getElementById("age").value);
  const isEmployed = document.getElementById("employed").checked;
  const skills = Array.from(
    document.querySelectorAll('input[name="skills"]:checked')
  ).map((input) => input.value);

  // Validate the age before displaying the result.
  if (
    document.getElementById("age").value.trim() === "" ||
    !Number.isFinite(age) ||
    age < 0 ||
    age > 120
  ) {
    result.textContent = "Please enter an age between 0 and 120.";
    status.textContent = "Check input";
    return;
  }

  // Use typeof to check each variable's data type.
  const lines = [
    `Name: ${userName} (Type: ${typeof userName})`,
    `Age: ${age} (Type: ${typeof age})`,
    `Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`,
    `Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`
  ];

  result.textContent = lines.join("\n");
  status.textContent = "Executed";

  // Also display each variable and its type in the browser console.
  console.log("Name:", userName, "| Type:", typeof userName);
  console.log("Age:", age, "| Type:", typeof age);
  console.log("Is Employed:", isEmployed, "| Type:", typeof isEmployed);
  console.log("Skills:", skills, "| Type:", typeof skills);
}

function resetExample() {
  document.getElementById("name").value = "Alice";
  document.getElementById("age").value = 25;
  document.getElementById("employed").checked = true;

  document.querySelectorAll('input[name="skills"]').forEach((input) => {
    input.checked = ["HTML", "CSS", "JavaScript"].includes(input.value);
  });

  runAssignment();
}

document.getElementById("run").addEventListener("click", runAssignment);
document.getElementById("reset").addEventListener("click", resetExample);

// Display the expected output as soon as the page loads.
runAssignment();
