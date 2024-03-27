let Horas= document.getElementById('Horas');
let Minutos= document.getElementById('Minutos');
let Segundos= document.getElementById('Segundos');
let ampm= document.getElementById('ampm');

let hh= document.getElementById('hh');
let mm= document.getElementById('mm');
let ss= document.getElementById('ss');

let hr_ponto = document.querySelector('.hr_ponto');
let min_ponto = document.querySelector('.min_ponto');
let seg_ponto = document.querySelector('.seg_ponto');
setInterval(() =>{

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amdDmd = h >= 12 ? 'PM' : 'AM';
    
    //Converter 24h para 12h
    
    if (h > 12){
        h = h - 12;
    }
    
    //adicionar zerp antes de um único número
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    //console.log();
    Horas.innerHTML = h + '<br><span>Horas</span>';
    Minutos.innerHTML = m + '<br><span>Minutos</span>';
    Segundos.innerHTML = s + '<br><span>Segundos</span>';
    ampm.innerHTML = amdDmd;
    

    hh.style.strokeDashoffset = 440 - (440* h)/ 12;
    mm.style.strokeDashoffset = 440 - (440* m)/ 60;
    ss.style.strokeDashoffset = 440 - (440* s)/ 60;

    hr_ponto.style.transform = `rotate(${h * 30}deg)`
    
    min_ponto.style.transform = `rotate(${m * 5.9}deg)`
    
    seg_ponto.style.transform = `rotate(${s * 5.9}deg)`
})




