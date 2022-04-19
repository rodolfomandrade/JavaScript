var numeros = []
var res = document.querySelector("div#res")
function adicionar() {
    let digitado = document.getElementById("numero")
    let tabela = document.getElementById("selecao")
    if (digitado.value < 1 || digitado.value > 100) {
        alert("O número digitado não é válido!")
    } else {
        let n = Number(digitado.value)
        let item = document.createElement("option")
        numeros.push(n)
        item.text = `Valor ${digitado.value} adicionado.`
        tabela.appendChild(item)
        digitado.value = ""
        res.innerHTML = ""
    }
}

function finalizar() {
    var res = document.querySelector("div#res")
    if (numeros.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        var soma = 0
        var media = 0
        for(let c = 0; c < numeros.length; c++) {
            soma += numeros[c]
        }

        media = soma / numeros.length

        numeros.sort()
        let dado1 = document.createElement("p")
        dado1.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.`
        res.appendChild(dado1)

        let dado2 = document.createElement("p")
        dado2.innerHTML = `O maior valor informado foi ${numeros[numeros.length - 1]}.`
        res.appendChild(dado2)
        
        let dado3 = document.createElement("p")
        dado3.innerHTML = `O menor valor informado foi ${numeros[0]}.`
        res.appendChild(dado3)

        let dado4 = document.createElement("p")
        dado4.innerHTML = `Somando todos os valores, temos ${soma}.`
        res.appendChild(dado4)

        let dado5 = document.createElement("p")
        dado5.innerHTML = `A média dos valores digitados é ${media}.`
        res.appendChild(dado5)
    }
}