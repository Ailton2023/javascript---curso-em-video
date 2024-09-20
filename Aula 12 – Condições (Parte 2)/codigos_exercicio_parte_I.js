 
 function carregar() {
 var msg = window.document.getElementById('msg')
 var msg2 = window.document.getElementById('msg2')
 var img = window.document.getElementById('imagem')
 var data = new Date()
 //var hora = data.getHours()
 var hora = 20
 msg.innerHTML = `Agora são ${hora} horas.`

 if(hora >= 0 && hora < 12){
    //Bom dia!
    img.src = 'relogio-02.png'
    document.body.style.background = '#e2cd9f'
 } else if (hora >=12 && hora < 18){  
    //Boa tarde!
    img.src = 'computadores-01-250px.png'
    msg2.innerHTML = `Continue seus estudos.`
    document.body.style.background = '#b9846f'
 } else {
    //Boa noite!
    document.body.style.background = '#515154'
 }

 }
 
