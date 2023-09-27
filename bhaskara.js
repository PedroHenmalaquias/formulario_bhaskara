function limpar() {
    document.getElementById("txtvalorA").value = ""
    document.getElementById("txtvalorB").value = ""
    document.getElementById("txtvalorC").value = ""
    document.getElementById("campoResultado").innerHTML = ""
}
function calcular() {
    let valorA = Number(document.getElementById("txtvalorA").value)
    let valorB = Number(document.getElementById("txtvalorB").value)
    let valorC = Number(document.getElementById("txtvalorC").value)
    let x1 = 0
    let x2 = 0
    if(valorA != "" && valorB != "" && valorC != ""){
        if(valorA > 0){
            x1 = (-valorB + Math.sqrt((valorB**2) - 4 * valorA * valorC)) / 2 * valorA
            x2 = (-valorB - Math.sqrt((valorB**2) - 4 * valorA * valorC)) / 2 * valorA
            if(x1 == x2) document.getElementById("campoResultado").innerHTML = `<h1> x = ${x1}`
            else document.getElementById("campoResultado").innerHTML = `<h1> x' = ${x1} e x'' = ${x2}`
        }
        else alert(`O valor de A não pode ser 0`)
    }
    else alert(`Preencha todos os campos com valores`)
}