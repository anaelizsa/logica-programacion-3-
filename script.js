function factorial() {
    const input = document.getElementById("numeroInput").value;
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        alert("Ingresa un número entero positivo o un número valido");
        document.getElementById("resultado").textContent = "";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }

    const resultado = `El factorial de ${numero} es ${factorial}`;
    console.log(resultado);
    document.getElementById("resultado").textContent = resultado;
}