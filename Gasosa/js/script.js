//dom
const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click', ()=>{

let dist=Number(distancia.value)
let rend=Number(rendimento.value)
let pre=Number(preco.value)

let conta = (dist/rend)* pre

resultado.textContent =`O preço da viagem é ${conta.toFixed(2)}`
})




