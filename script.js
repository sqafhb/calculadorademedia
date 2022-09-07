var resultado = document.getElementById("resultado");

function calcularMedia(){
    var primeiroBimestre = parseInt(document.getElementById("b1").value);
    var segundoBimestre = parseInt(document.getElementById("b2").value);
    var terceiroBimestre = parseInt(document.getElementById("b3").value);
    var quartoBimestre = parseInt(document.getElementById("b4").value);
    var media = (primeiroBimestre+segundoBimestre+terceiroBimestre+quartoBimestre)/4; 
    console.log(media);
    
    if(media>=6){
        resultado.style.color="#5CBF84"
        resultado.innerHTML = `Sua média é ${media}<br> Parabéns, você foi aprovado!`;
    }
    else{
        resultado.style.color="#FF5C5C"
        resultado.innerHTML = `Sua média é ${media}<br> Infelizmente, você foi reprovado.`;
       }      
 }