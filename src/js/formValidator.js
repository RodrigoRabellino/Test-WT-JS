document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", formValidate);
});

function formValidate(e) {
  e.preventDefault();
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let userName = document.getElementById("formName").value;
  let userSurname = document.getElementById("formSurname").value;
  let userEmail = document.getElementById("formEmail").value;
  let userCountry = document.getElementById("formCountry").value;
  let userCity = document.getElementById("formCity").value;
  let userCI = document.getElementById("formCi").value;
  let terms = document.getElementById("formTerms").value;

  if (userName === "") {
    return;
  }
  if (userSurname === "") {
    return;
  }
  if (!emailRegex.test(userEmail)) {
    return;
  }
  if (!validarCedula(userCI)) {
    return;
  }
}
