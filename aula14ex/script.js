function contar() {
    let ini = window.document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.getElementById('txtp')
    let re = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ' Impossivel contar!'
        window.alert(`[ERRO] Faltam dados`)

    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido')
        }
        if ( i < f){ 
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F606}`
            }
        }else{
            // contagem regressiva
            for (let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}