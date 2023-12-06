let fullName = document.querySelector("div>div>div>input#name");
let s = document.querySelector("div>div>div>select#degree");
let commission = document.querySelector("div>div>div>input#commission");
let hours = document.querySelector("div>div>div>input#hours");
let submit = document.querySelector("div>div>div>button");
let pure;
let taxsalary;
let salary;
let d = 0;
s.addEventListener("change", function () {
  if (s != undefined) {
    d = s.value;
  }
});
submit.addEventListener("click", function () {
  h = Number(hours.value);
  c = Number(commission.value);
  if (d == 1) {
    pure = h * 50;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else if (d == 2) {
    pure = h * 80;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else if (d == 3) {
    pure = h * 100;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else if (d == 4) {
    pure = h * 150;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else {
    alert("Somthing went wrong. Try Again.");
  }
  document.querySelector("h1#fullname").innerHTML = `<h2>Your Fullname:</h2>
    </br>
    ${fullName.value}`;
  document.querySelector("h1#salary").innerHTML = `<h2>Your Final Pay:</h2> 
    </br>
    ${salary} <span> $ </span>`;
});
