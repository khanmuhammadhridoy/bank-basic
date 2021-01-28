//  my code
// login button event handler
document.getElementById("login").addEventListener("click", function () {
  document.getElementById("loginArea").style.display = "none";
  document.getElementById("transactionArea").style.display = "block";
});


//deposit button event handler
document.getElementById('addDeposit').addEventListener("click", function () {
  // getting input number
  const depositNumber = getInputNumber('depositAmount');
  // adding it to deposit
  updateSpanText("currentDeposit", depositNumber);
  // adding it to balance
  updateSpanText("currentBalance", depositNumber);
  //clean input 
  document.getElementById('depositAmount').value = "";
})
// withdraw button event handler
document.getElementById('addWithdraw').addEventListener("click", function () {
  // getting input number
  const withdrawNumber = getInputNumber('withdrawAmount');
  // adding it to withdraw
  updateSpanText("currentWithdraw", withdrawNumber);
  // subtracting from balance 
  updateSpanText("currentBalance", -1 * withdrawNumber);
  //clean input 
  document.getElementById('withdrawAmount').value = "";
})

// will take given value and make it number
function getInputNumber(id) {
  const amountNumber = parseFloat(document.getElementById(id).value);
  return amountNumber;
}

// will take span id and add given value
function updateSpanText(id, addedNumber) {
  const currentNumber = parseFloat(document.getElementById(id).innerText);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}

























/* practice code
// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("loginArea");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transactionArea");
  transactionArea.style.display = "block";
})

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber('depositAmount');

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById('depositAmount').value = "";
})



// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber('withdrawAmount');

  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById('withdrawAmount').value = "";



})


function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, addedNumber){
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}*/