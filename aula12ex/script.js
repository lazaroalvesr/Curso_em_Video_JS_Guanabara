function carregar() {
    const msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}
