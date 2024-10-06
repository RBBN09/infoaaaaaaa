function descuento(){
    let monto = +document.querySelector('#monto').value;
    let mostrar = document.querySelector('#out');
    let salida ;
    mostrar.textContent = salida;
        if (monto >= 50){
            mostrar.textContent = (monto) - (monto * 0.50) + '- quedaria su total';
        } else {
            mostrar.textContent = (monto) - (monto * 0.10) + '- quedaria su total'
        }
}