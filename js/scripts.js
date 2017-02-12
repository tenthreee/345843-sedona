var link = document.querySelector(".hotel-search-btn");
var form = document.querySelector(".hotel-search-form");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("hotel-search-form-hide");
});
