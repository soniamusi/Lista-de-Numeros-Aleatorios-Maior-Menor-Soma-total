let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let result = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false    
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado.`
       lista.appendChild(item)
       result.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na Lista')

    }

    num.value = ''
    num.focus()
    
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let totalCad = valores.length 
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores [pos] < menor)
            menor = valores[pos]            
        }  
        media = soma/totalCad

        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo,temos ${totalCad} Numeros cadastrados.</p>` 
        result.innerHTML +=  `<p>O Maior valor informado foi ${maior}.</p>`
        result.innerHTML +=  `<p>O Menor valor informado foi ${menor}.</p>`
        result.innerHTML +=  `<p>Somando todos os valores ${soma}.</p>`
        result.innerHTML +=  `<p>A Média de todos os valores é: ${media}.</p>`

    }
        
   
}