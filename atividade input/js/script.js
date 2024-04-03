//dom
const nome= document.querySelector('#nome')
const uni1= document.querySelector('#uni1')
const uni2= document.querySelector('#uni2')
const uni3= document.querySelector('#uni3')
const btn= document.querySelector('#btn')
const resultado= document.querySelector('#resultado')

//evento
btn.addEventListener('click', ()=>{

n1= Number (uni1.value)
n2= Number (uni2.value)
n3= Number (uni3.value)

media = (n1+n2+n3) / 3

if(media>=5){
situacao = 'Aprovado!'
}else{
    situacao = 'Reprovado!'
}

resultado.innerHTML =`Sr(a) ${nome.value} sua media final foi ${media.toFixed(1)} <br> você foi ${situacao}`
})




