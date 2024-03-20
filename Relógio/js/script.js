//dom
const horas= document.querySelector('#horas')
const minutos= document.querySelector('#minutos')
const segundos= document.querySelector('#segundos')

setInterval(relogio,1000)

function relogio(){
    let dia = new Date()
    let h= dia.getHours()
    let m= dia.getMinutes()
    let s= dia.getSeconds()

    if(h<10){
        h="0" +h
    }

    if(m<10){
        m="0" +m
    }
    
    if(s<10){
        s="0" +s
    }
    
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    

}