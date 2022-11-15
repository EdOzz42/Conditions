var verificar = window.document.getElementById
("botao")
verificar.addEventListener("click", ver)
//var vereficar vai selecionar o elemento do botão, para que o ouvidor de eventos "escute" o evento click nessa variável, se ele "escutar" esse evento, ele vai executar a função ver(). 
verificar.addEventListener("mouseenter", entrou)
verificar.addEventListener("mouseout", saiu)

function ver(){
    var res = window.document.querySelector("section#resultado")
    var dinheiro = Number(txtcl.value)
    res.innerHTML = `<p>Sua renda atual é de<strong> R$${dinheiro}</strong></p>`
    if (dinheiro >= 10000) {
        res.innerHTML += "<p>Você é um <strong>burguês safado!</strong></p>"
    } else {
        res.innerHTML += "<p>Você clama por <strong>picanha</strong> e <strong>cerveja quentinha</strong></p>"
    }
} //Isto é uma condição composta, pelo fato de ter o if e o else. 

function entrou() {
    verificar.style.color = 'rgb(149, 235, 254)'
    verificar.style.fontWeight = '700'
    verificar.style.backgroundColor = 'rgb(60, 74, 74)'
}

function saiu() {
    verificar.style.color = 'black'
    verificar.style.fontWeight = '100'
    verificar.style.backgroundColor = 'white'
}