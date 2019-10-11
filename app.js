// UI
const uiAnual = document.querySelector('#anual');
const uiMensual = document.querySelector('#mensual');
const uiDiaria = document.querySelector('#diaria');

// Variables
let anual = 0;
let mensual = 0;
let diaria = 0;

// Functions

// Clear Form Fields
function clearFields() {
    document.querySelector('#montoInicial').value = '';
    document.querySelector('#interes').value = '';
};
// Calculate Ganancia
function calcularGanancia(monto,interes) {
    anual = ((monto * interes) / 100).toFixed(2);
    diaria = (anual / 365).toFixed(2);
    mensual = (anual / 12).toFixed(2);
}
// Show Ganancia in the UI
function displayGanancia() {
   uiAnual.innerHTML = `la ganancia sera de   $${anual}`;
   uiMensual.innerHTML = `la ganancia sera de $${mensual}`;
   uiDiaria.innerHTML = `la ganancia sera de $${diaria}`;
}
// Shows alerts in the UI
function showAlert(alert, message) {
    const div = document.createElement('div');
    div.className = `alert alert-${alert} mt-4`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const row = document.querySelector('#row');
    container.insertBefore(div,row);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}



// Form 
 document.querySelector('#entry').addEventListener('submit', (e) => {
    //  Prevent submit
    e.preventDefault();
    // Form Values
    const monto = document.querySelector('#montoInicial').value;
    const interes = document.querySelector('#interes').value;
    // Clears the form
    clearFields();
    // Validation
    if(monto != "" && interes != "") {
    calcularGanancia(monto, interes);
    displayGanancia();
    showAlert('success', 'Ganancia Calculada');
    } else {
        showAlert('danger', 'Completa el Formulario')
    }
});



