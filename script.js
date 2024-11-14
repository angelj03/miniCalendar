//Save elements into a Const Variable
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

//Create a new Date ObJECT
const date = new Date();
//console.log(date.getFullYear());

//Attach date data to specific HTML element
const month = date.getMonth(); //Month
monthNameEl.innerText = date.toLocaleString("en", { month: "long" });

dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
