function showError(input, error) {
  const label = document.getElementById(`error-${input.id}`);
  input.style.background = "rgba(255,0,0,0.1)";
  label.innerHTML = "";
  label.appendChild(document.createTextNode(error));
}

function hideError(input) {
  input.style.background = "";
  const label = document.getElementById(`error-${input.id}`);
  label.innerHTML= "";
}

function isEmpty(element, message) {
  if (element.value === "") {
    showError(element, message);
    return true;
  }
  return false;
}

function validateLength(element, message, length) {
  if (element.value.length <= length) {
    showError(element, message);
    return false;
  }
  return true;
}

function validateForm({
  userName,
  userLastname,
  userEmail,
  userDepto,
  userCity,
  userCI,
  terms,
}) {
  let errors = 0;
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (
    isEmpty(userName, "Ingrese un Nombre.") ||
    !validateLength(userName, "Ingrese al menos dos caracteres.", 2)
  ) {
    errors++;
  }

  if (
    isEmpty(userLastname, "Ingrese un apellido") ||
    !validateLength(userLastname, "ingrese al menos dos caracteres.", 2)
  ) {
    errors++;
  }

  if (isEmpty(userEmail, "Ingrese un email.")) {
    errors++;
  } else if (!emailRegex.test(userEmail.value)) {
    errors++;
    showError(userEmail, "ingrese un email valido");
  }

  if (isEmpty(userDepto, "Ingrese un departamento.")) {
    errors++;
  }
  if (isEmpty(userCity, "Ingrese una ciudad.")) {
    errors++;
  }

  if (isEmpty((userCI, "Ingrese una C.I."))) {
    errors++;
  } else if (!validarCedula(userCI.value)) {
    showError(userCI, "Ingrese una C.I. valida");
  }
  if (!terms.checked) {
    showError(terms, "Debe aceptar las bases y condiciones.");
  }
  return !errors;
}

function onSubmit(e) {
  e.preventDefault();
  const userName = document.getElementById("firstName");
  const userLastname = document.getElementById("lastName");
  const userEmail = document.getElementById("email");
  const userDepto = document.getElementById("depto");
  const userCity = document.getElementById("city");
  const userCI = document.getElementById("ci");
  const terms = document.getElementById("terms");

  const inputs= {
    userName,
    userLastname,
    userEmail,
    userDepto,
    userCity,
    userCI,
    terms,
  }

  const valid = validateForm(inputs);

  if(valid){
    console.log("enviar form");
    e.target.reset();
    Object.values(inputs).forEach(hideError)
  }
}
