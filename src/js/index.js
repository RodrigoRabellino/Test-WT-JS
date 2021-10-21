$( document ).ready(function() {
  // $('.slick__container').slick({
  //   //setting-name: setting-value
  // });
  setSelects();
  setArticles();
  document.getElementById("form").addEventListener("submit", formValidate);
  
});