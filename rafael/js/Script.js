//dom
const Lampada = document.querySelector('#Lampada')
const bt01 = document.querySelector('#Ligar')
const bt02 = document.querySelector('#Desligar')

//eventos
bt01.addEventListener('click', Ligar)
bt02.addEventListener('click', Desligar)
bt01.addEventListener('dblclick', Quebrar)
//funções
function Ligar(){
Lampada.src = 'images/acesa.gif'
}
function Desligar(){
Lampada.src = 'images/apagada.gif'
}
function Quebrar(){
Lampada.src = 'images/quebrada.jpg'
}
