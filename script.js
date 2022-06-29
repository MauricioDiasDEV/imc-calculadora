var pesoEl
var alturaEl
var imcEl
var resultadoEl


function calcular(event){

    
    event.preventDefault();
    

    pesoEl = document.getElementById('peso').value
    alturaEl = document.getElementById('altura').value
    resultadoEl = document.getElementById('resultado')

    imcEl = pesoEl / (alturaEl * alturaEl);

   
    console.log(Number(pesoEl))
    console.log(Number(alturaEl))
    

    if (imcEl < 17){

        resultadoEl.innerHTML = 'Seu resultado foi :' + Math.round(imcEl) +'<br/> Cuidado! Você está muito abaixo do peso.'
    }else if(imcEl > 17 && imcEl <= 18.49){
        resultadoEl.innerHTML = 'Seu resultado foi:' + Math.round(imcEl) +'<br/> Você está abaixo do peso.'
    } else if(imcEl > 18.5 && imcEl <= 24.99){
        resultadoEl.innerHTML = 'Seu resultado foi:' + Math.round(imcEl) +'<br/> Você está no peso considerado normal.'
    } else if(imcEl > 25 && imcEl <= 29.99){
        resultadoEl.innerHTML = 'Seu resultado foi:' + Math.round(imcEl) +'<br/> Você está acima do peso.'
    } else if(imcEl >= 30){
        resultadoEl.innerHTML = 'Seu resultado foi:' + Math.round(imcEl) +'<br/> Cuidado! Risco de Obesidade.'
    }


    clear()
    showBox()

}


function clear(){
    pesoEl = document.getElementById('peso').value = ''
    alturaEl = document.getElementById('altura').value = ''

   
}


function showBox(){
    resultadoEl = document.getElementById('resultado')

    if (resultadoEl.style.display != "none"){
        resultadoEl.style.display = "block"
    }else {
        resultadoEl.style.display = "none"
    }
}