var saat = document.querySelector('.saat')
var deqiqe = document.querySelector('.deqiqe')
var saniye = document.querySelector('.saniye')
var start=document.querySelector('.start')
var dayan=document.querySelector('.dayan')
var reset=document.querySelector('.reset')
var intervalSayi=0;
var saatD = 0;
var deqiqeD = 0;
var saniyeD = 0;

function chronometr() {
    saniyeD++
    saniye.innerText = saniyeD

    if(saniyeD<10)
    {
        
        saniye.innerText='0'+saniyeD
    }
    if (saniyeD == 60) {
        deqiqeD++
        saniyeD = 0
        deqiqe.innerText = deqiqeD
    }
    else if (deqiqeD == 60){
        saatD++
        deqiqeD = 0
        saat.innerText = saatD
    }
}

start.onclick=function(){
    intervalSayi++
    setInterval(chronometr,100)
}
dayan.onclick=function(){
    clearInterval(intervalSayi)
}
reset.onclick=function(){
saniyeD=0;
deqiqeD=0;
saatD=0;
saniye.innerText=saniyeD;
deqiqe.innerText=deqiqeD;
saat.innerText=saatD;
}