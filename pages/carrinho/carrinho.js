window.onload = ()=>{
    var itensNoCarrinho = Object.keys(localStorage)
    let divCarrinhoDeCompras = document.getElementById('divCarrinhoDeCompras')
    let tempHtml = ''
    tempHtml += '<div class="card-deck">'
    itensNoCarrinho.forEach((element)=>{
        tempHtml+=localStorage.getItem(element)
    })
    tempHtml +='</div>'
    divCarrinhoDeCompras.innerHTML +=tempHtml
}

const adicionarNoCarrinho = (id) => {
    alert('carro comprado!')   
    
}