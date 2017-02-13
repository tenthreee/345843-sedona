var link = document.querySelector(".hotel-search-btn");
var form = document.querySelector(".hotel-search-form");

form.classList.add("hotel-search-form-hide");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("hotel-search-form-hide");
});
