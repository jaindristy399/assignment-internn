const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");

const subtotalOutput = document.getElementById("subtotal");
const percentageOutput = document.getElementById("percentage");
const tipOutput = document.getElementById("calculated-tip");
const totalOutput = document.getElementById("total");
const statusOutput = document.getElementById("status");
const copyStatus = document.getElementById("copy-status");

let formattedResult = "";

function formatMoney(amount) {
  return "$" + amount.toFixed(2).replace(/\.00$/, "");
}

function calculateTip() {
  // prompt() values are strings, so explicitly convert input values to numbers.
  const subtotal = Number(billInput.value);
  const tipPercentage = Number(tipInput.value);

  if (billInput.value.trim() === "" || tipInput.value.trim() === "" ||
      !Number.isFinite(subtotal) || !Number.isFinite(tipPercentage) ||
      subtotal < 0 || tipPercentage < 0 || tipPercentage > 100) {
    statusOutput.textContent = "Enter a valid bill and a tip percentage from 0 to 100.";
    copyStatus.textContent = "";
    return false;
  }

  // Arithmetic operators calculate the tip.
  const calculatedTip = subtotal * (tipPercentage / 100);

  // Assignment operator adds the tip to the subtotal.
  let totalAmount = subtotal;
  totalAmount += calculatedTip;

  subtotalOutput.textContent = formatMoney(subtotal);
  percentageOutput.textContent = tipPercentage + "%";
  tipOutput.textContent = formatMoney(calculatedTip);
  totalOutput.textContent = formatMoney(totalAmount);
  statusOutput.textContent = "Calculation complete";

  formattedResult =
    `Subtotal: ${formatMoney(subtotal)}\n` +
    `Tip Percentage: ${tipPercentage}%\n` +
    `Calculated Tip: ${formatMoney(calculatedTip)}\n` +
    `Total Amount to Pay: ${formatMoney(totalAmount)}`;

  console.log(formattedResult);
  copyStatus.textContent = "";
  return true;
}

function enterUsingPrompts() {
  const billAnswer = prompt("Enter the bill amount:", billInput.value);
  if (billAnswer === null) {
    statusOutput.textContent = "Prompt cancelled";
    return;
  }

  const tipAnswer = prompt("Enter the tip percentage:", tipInput.value);
  if (tipAnswer === null) {
    statusOutput.textContent = "Prompt cancelled";
    return;
  }

  // prompt() returns strings; Number() converts them explicitly.
  billInput.value = billAnswer.trim();
  tipInput.value = tipAnswer.trim();
  calculateTip();
}

function resetCalculator() {
  billInput.value = 100;
  tipInput.value = 15;
  calculateTip();
}

async function copyResult() {
  if (!formattedResult && !calculateTip()) return;

  try {
    await navigator.clipboard.writeText(formattedResult);
    copyStatus.textContent = "Result copied to clipboard!";
  } catch (error) {
    copyStatus.textContent = "Copy isn't available here. You can copy the result from the Console.";
  }
}

document.getElementById("calculate").addEventListener("click", calculateTip);
document.getElementById("prompt-input").addEventListener("click", enterUsingPrompts);
document.getElementById("reset").addEventListener("click", resetCalculator);
document.getElementById("copy-result").addEventListener("click", copyResult);

// Display the expected example when the page loads.
calculateTip();
