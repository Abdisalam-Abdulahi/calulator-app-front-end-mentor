const items_button = document.querySelectorAll(".items_button");
const lower = document.querySelector(".lower");
const upper = document.querySelector(".upper");
const small_box = document.querySelector(".small_box");
const big_box = document.querySelector(".big_box");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#dividition");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");
const zero = document.querySelector("#zero");
const reset = document.querySelector("#reset");
const delete_button = document.querySelector("#delete_button");
const dots_1 = document.querySelector("#dots_1");
const dots_2 = document.querySelector("#dots_2");
const dots_3 = document.querySelector("#dots_3");
const link = document.querySelector("#link");
let ad_click_checker = false;
let subtraction_click_checker = false;
let multiplication_click_checker = false;
let division_click_checker = false;
let lower_content_array = [];
dots_1.addEventListener("click", () => {
  dots_1.style.opacity = "100%";
  dots_2.style.opacity = "0%";
  dots_3.style.opacity = "0%";
  link.setAttribute("href", "");
});
dots_2.addEventListener("click", () => {
  dots_2.style.opacity = "100%";
  dots_1.style.opacity = "0%";
  dots_3.style.opacity = "0%";
  link.setAttribute("href", "theme2.css");
});
dots_3.addEventListener("click", () => {
  dots_3.style.opacity = "100%";
  dots_2.style.opacity = "0%";
  dots_1.style.opacity = "0%";
  link.setAttribute("href", "theme3.css");
});
one.addEventListener("click", () => {
  lower.textContent = lower.textContent + "1";
});

two.addEventListener("click", () => {
  lower.textContent = lower.textContent + "2";
});
three.addEventListener("click", () => {
  lower.textContent = lower.textContent + "3";
});
four.addEventListener("click", () => {
  lower.textContent = lower.textContent + "4";
});
five.addEventListener("click", () => {
  lower.textContent = lower.textContent + "5";
});
six.addEventListener("click", () => {
  lower.textContent = lower.textContent + "6";
});
seven.addEventListener("click", () => {
  lower.textContent = lower.textContent + "7";
});
eight.addEventListener("click", () => {
  lower.textContent = lower.textContent + "8";
});
nine.addEventListener("click", () => {
  lower.textContent = lower.textContent + "9";
});
dot.addEventListener("click", () => {
  lower.textContent = lower.textContent + ".";
});
zero.addEventListener("click", () => {
  lower.textContent = lower.textContent + "0";
});
reset.addEventListener("click", () => {
  lower.textContent = "";
  upper.textContent = "";
  ad_click_checker = false;
  subtraction_click_checker = false;
  multiplication_click_checker = false;
  division_click_checker = false;
});
delete_button.addEventListener("click", () => {
  let content = lower.textContent;
  content = content.toString().slice(0, -1);
  lower.textContent = content;
});
plus.addEventListener("click", () => {
  level_up();
  ad_click_checker = true;
});
minus.addEventListener("click", () => {
  level_up();
  subtraction_click_checker = true;
});
multiplication.addEventListener("click", () => {
  level_up();
  multiplication_click_checker = true;
});
division.addEventListener("click", () => {
  level_up();
  division_click_checker = true;
});
equal.addEventListener("click", () => {
  if (ad_click_checker == true) {
    additor();
    ad_click_checker = false;
  }
  if (subtraction_click_checker == true) {
    subtractor();
    subtraction_click_checker = false;
  }
  if (multiplication_click_checker == true) {
    multipliar();
    multiplication_click_checker = false;
  }
  if (division_click_checker == true) {
    dividor();
    division_click_checker = false;
  }
});
function level_up() {
  upper.textContent = lower.textContent;
  lower.textContent = "";
}
function additor() {
  const upper_part = parseFloat(upper.textContent);
  const lower_part = parseFloat(lower.textContent);
  const result = parseFloat(upper_part + lower_part);
  lower.textContent = result;
  upper.textContent = "";
}
function subtractor() {
  const upper_part = parseFloat(upper.textContent);
  const lower_part = parseFloat(lower.textContent);
  const result = parseFloat(upper_part - lower_part);
  lower.textContent = result;
  upper.textContent = "";
}
function multipliar() {
  const upper_part = parseFloat(upper.textContent);
  const lower_part = parseFloat(lower.textContent);
  const result = parseFloat(upper_part * lower_part);
  lower.textContent = result;
  upper.textContent = "";
}
function dividor() {
  const upper_part = parseFloat(upper.textContent);
  const lower_part = parseFloat(lower.textContent);
  const result = parseFloat(upper_part / lower_part);
  lower.textContent = result;
  upper.textContent = "";
}
