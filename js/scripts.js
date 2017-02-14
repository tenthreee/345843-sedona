var link = document.querySelector(".hotel-search-btn");
var form = document.querySelector(".hotel-search-form");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");
var adult = document.querySelector("[name=adult]");
var child = document.querySelector("[name=child]");

form.classList.add("hotel-search-form-hide");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("hotel-search-form-hide");
  form.classList.remove("form-error");
});

form.addEventListener("submit", function(event) {
  if (!dateIn.value || !dateOut.value || !adult.value || !child.value) {
    event.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  }
});
