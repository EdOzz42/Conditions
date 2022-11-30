var verificar = window.document.getElementById
("botao")
verificar.addEventListener("click", ver)
//"var vereficar" vai selecionar o elemento do botão, para que o ouvidor de eventos "escute" o evento click nesse elemento, se ele "escutar" esse evento, ele vai executar a função ver().

// A "function ver()" vai verificar as informações de renda mensal e dar um determinado output, resuldado dependendo do valor que o usuário colocar no input de renda.
function ver(){
    var res = window.document.querySelector("section#resultado")
    var dinheiro = Number(txtcl.value)
    if (dinheiro <= 0) {
        //Vai invalidar dados que sejam menores ou iguais a 0.
        res.innerHTML = 'Valor inválido'
        res.style.color = 'red'
        res.style.fontWeight = '700'
        window.alert(`[ERRO!] Sua renda mensal não pode ser de ${dinheiro} reais`)
    } 
    else if (dinheiro >= 15000) {
        // Renda mensal "alta"
        res.innerHTML = `<p>Sua renda atual é de<strong> R$${dinheiro}</strong></p>`
        res.innerHTML += "<p>Você é um <strong>burguês safado!</strong></p>"
        res.style.color = 'black'
        res.style.fontWeight = '100'
    } 
    else if (dinheiro >= 5000){
        // Renda mensal "média"
        res.innerHTML = `<p>Sua renda atual é de<strong> R$${dinheiro}</strong></p>`
        res.innerHTML += "<p>Você está com uma <strong>condição financeira legal</strong>, certo?</p>"
        res.style.color = 'black'
        res.style.fontWeight = '100'
    } 
    else {
        // Renda mensal "baixa"
        res.innerHTML = `<p>Sua renda atual é de<strong> R$${dinheiro}</strong></p>`
        res.innerHTML += "<p>Você clama por <strong>picanha</strong> e <strong>cerveja quentinha</strong></p>"
        res.style.color = 'black'
        res.style.fontWeight = '100'
    }
}

// Interatividade com o botão

verificar.addEventListener("mouseenter", entrou)
verificar.addEventListener("mouseout", saiu)

// Functions que realizam interatividade com o botão "Verificar" quando clicado.

function entrou() {
    verificar.style.fontWeight = '700'
    verificar.style.backgroundImage = 'linear-gradient(to right, rgb(129, 195, 49, 0.600), rgb(234, 205, 54, 0.600))'
}

function saiu() {
    verificar.style.color = 'black'
    verificar.style.fontWeight = '100'
    verificar.style.backgroundImage = 'none'
}