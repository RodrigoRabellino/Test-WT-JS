function formValidate(e) {
  e.preventDefault();

  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const userName = document.getElementById("firstName");
  const userLastname = document.getElementById("lastName");
  const userEmail = document.getElementById("email");
  const userDepto = document.getElementById("depto");
  const userCity = document.getElementById("city");
  const userCI = document.getElementById("ci");
  const terms = document.getElementById("formTerms");

  if (userName.value === "") {
    showError(userName, "Ingrese un Nombre.");
    return;
  } else if (userName.value.length <= 2) {
    showError(userName, "Ingrese al menos dos caracteres.");
    return;
  }

  if (userLastname.value === "") {
    showError(userLastname, "Ingrese un apellido.")
    return;
  } else if (userLastname.value.length <= 2) {
    showError(userLastname, "Ingrese al menos dos caracteres.");
    return;
  }

  if (userEmail.value === "") {
    showError(userEmail, "Ingrese un email.");
    return;
  } else if (!emailRegex.test(userEmail.value)) {
    showError(userEmail, "Ingrese un email valido.");
    return;
  }

  if (userDepto.value === "") {
    showError(userDepto, "Ingrese un departamento.");
    return;
  }
  if (userCity.value === "") {
    showError(userCity, "Ingrese una ciudad.");
    return;
  }

  if (userCI.value === "") {
    showError(userCI, "Ingrese una C.I.");
    return;
  } else if (!validarCedula(userCI.value)) {
    showError(userCI, "Ingrese una C.I. valida");
    return;
  }
  if (!terms.checked) {
    showError(terms, "Debe aceptar las bases y condiciones.");
    return;
  }
}

function showError(input, error) {
  const label = document.getElementById(`span${input.id}`);
  input.style.background = "rgba(255,0,0,0.1)";
  label.innerHTML="";
  label.appendChild(document.createTextNode(error));
}

function hideError(input) {
  input.style.background = "";
  const label = document.getElementById(`span${input.id}`);
  label.innerHTML("");
}
