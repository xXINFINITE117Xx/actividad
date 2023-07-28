function calcularPromedio(){
    let numero1 = parseFloat(document.getElementById("numero1")).value
    let numero2 = parseFloat(document.getElementById("numero2")).value

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Ingresa números válidos.');
        return;
    }

    let promedio = (numero1 + numero2) / 2;

    alert(`El promedio es: ${promedio}`);
}