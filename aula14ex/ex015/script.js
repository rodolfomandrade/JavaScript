function contar(){
    var inicio = window.document.getElementById("inicio")
    var final = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("res")

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}