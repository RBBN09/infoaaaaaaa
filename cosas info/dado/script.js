let generarBtn = document.getElementById('generarBtn');
let numeroDisplay = document.getElementById('numero');

generarBtn.addEventListener('click', function() {
  let numero = Math.floor(Math.random() * 6) + 1;
  numeroDisplay.innerText = numero;
});
