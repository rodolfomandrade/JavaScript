function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.width = "250px"
        img.style.height = "250px"
        img.style.borderRadius = "50%"
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "menininho.jpg")
            }else if (idade >= 10 && idade < 21) {
                img.setAttribute("src", "adolescente.jpg")
            }else if (idade >= 21 && idade < 50) {
                img.setAttribute("src", "homem.jpg")
            }else {
                img.setAttribute("src", "velho.jpg")
            }

        }else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "menininha.jpg")
            }else if (idade >= 10 && idade < 21) {
                img.setAttribute("src", "menina.jpg")
            }else if (idade >= 21 && idade < 50) {
                img.setAttribute("src", "mulher.jpg")
            }else {
                img.setAttribute("src", "velha.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}