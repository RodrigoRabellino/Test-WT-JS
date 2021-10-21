$( document ).ready(function() {
  $('.slick__container').slick();
  setSelects();
  setArticles();
  document.getElementById("form").addEventListener("submit", onSubmit);
});