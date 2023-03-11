const btnSubmit = document.querySelector('#btnSubmit')
    btnSubmit.addEventListener('click', function(){
        let ini = document.getElementById('txtInicio')
        let fim = document.getElementById('txtFim')
        let passo = document.getElementById('txtPasso')
        let res = document.getElementById('res')

        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerHTML = 'Impossivel contar, faltam dados!'
        } else{
            res.innerHTML = 'Contando:<br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if(p <= 0){
                alert('Passo Invalido!, Considerando passo 1.')
                p = 1
            }
            if(i < f){
                //Contagem Crescente
                for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            } else{
                //Contagem Regressiva
                for(let c = i; c >= f ; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }

    })

    //emoji Unicode  \u{1F449} seta indicando para a direita
    //emoji unicode \u{1F3C1} bandeirinha