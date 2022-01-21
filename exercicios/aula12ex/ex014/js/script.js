function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = '#f8c28f'
    } else if(hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#f44525'
    } else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#0d3850'
    }

}