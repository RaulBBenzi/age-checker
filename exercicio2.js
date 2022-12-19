function check() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var result = document.getElementById('result')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Ano invalido')
    } else {
        var radsex = document.getElementsByName('radsex')
        var age = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'iamge');
        if(radsex[0].checked) {
            gen = 'Homem'
            if(age >= 0 && age < 18){
                img.setAttribute('src', 'menino.jpg');
            }else if(age > 18 && age <= 50){
                img.setAttribute('src', 'homem-jovem.jpg');
            } else{
                img.setAttribute('src', 'velho.jpg');
            }
        } else if (radsex[1].checked) {
            gen = 'Mulher'
            if(age >= 0 && age < 18){
                img.setAttribute('src', 'menina.jpg');
            }else if(age > 18 && age <= 50){
                img.setAttribute('src', 'mulher-jovem.jpg');
            } else{
                img.setAttribute('src', 'velha.jpg');
            }
        } 
    }
    result.innerHTML = `Detectamos ${gen} com ${age} anos`
    result.appendChild(img)
}

