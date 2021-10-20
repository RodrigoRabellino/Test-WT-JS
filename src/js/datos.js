const dptosLocs = {
  Artigas: ["Artigas", "Bella Unión"],
  Canelones: ["Canelones", "Santa Lucía"],
  Montevideo: ["Montevideo"],
  Salto: ["Salto", "Daymán", "Arapey"],
};

function setSelectOption(selectElem, option) {
	const optionElem = document.createElement("option");
    optionElem.textContent = option;
    optionElem.value = option;
    selectElem.appendChild(optionElem);
}



function setSelects() {
  const selectDpto = document.getElementById("formDpto");
  const selectCity = document.getElementById("formCity");

  Object.keys(dptosLocs).forEach((dpto) => {
    setSelectOption(selectDpto, dpto)
  });
  selectDpto.onchange = function() {
	const citiesList = dptosLocs[this.value]
	citiesList.forEach((city) => {
		setSelectOption(selectCity, city)
	})
  }
}
