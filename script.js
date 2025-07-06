function botao(n){
    alert(`Você pressionou o ${n}º botão`)
}

function exibir_conteudo(id, display_ideal){
    let alvo = document.getElementById(`${id}`)
    if(alvo.style.display == 'flex' || alvo.style.display == 'block'){ 
        alvo.style.display = 'none'
    }else{
        alvo.style.display = `${display_ideal}`
    }
}