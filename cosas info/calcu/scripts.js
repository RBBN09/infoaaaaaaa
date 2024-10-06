function mostrarresultdo(resultado){
    document.getElementById('output').value = resultado;
    let salida = document.getElementById('output');
    let random = Math.ceil(Math.random() * numero);
    salida.textContent = random;
}
function suma(){
    let numero1 = +document.getElementById('num1').value
    let numero2 = +document.getElementById('num2').value
    mostrarresultdo(numero1 + numero2);
}
function resto(){
    let numero1 = +document.getElementById('num1').value
    let numero2 = +document.getElementById('num2').value
    mostrarresultdo(numero1 - numero2);
}
function multiplicacion(){
    let numero1 = +document.getElementById('num1').value
    let numero2 = +document.getElementById('num2').value
    mostrarresultdo(numero1 * numero2);
}
function division(){
    let numero1 = +document.getElementById('num1').value
    let numero2 = +document.getElementById('num2').value
    mostrarresultdo(numero1 / numero2);
}
function RC(){
    let numero1 = +document.getElementById('num1').value
    mostrarresultdo(Math.sqrt(numero1));
}
function potenciacion(){
    let numero1 = +document.getElementById('num1').value
    let numero2 = +document.getElementById('num2').value
    mostrarresultdo(Math.pow(numero1, numero2));
}

function CE(){
    document.getElementById('output').value = '';
    document.getElementById('num1').value ='';
    document.getElementById('num2').value ='';
}