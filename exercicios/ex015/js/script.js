function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')     
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/hcrianaca.png')
            } else if(idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/hjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/hadulto.png')
            } else {
               //idoso 
               img.setAttribute('src', 'img/hidoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/mcrianca.png')
            } else if(idade >= 10 && idade < 24) {
                //jovem
                img.setAttribute('src', 'img/mjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/madulta.png')
            } else {
               //idoso 
               img.setAttribute('src', 'img/midoso.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.width = '250px'
        img.style.height = '250px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}