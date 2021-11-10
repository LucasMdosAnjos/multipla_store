const tresCarrosMaisVendidos = new Map(Object.entries({
    1:"<div class='card' id:'1'><img class='card-img-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-DjaCK_mPD7fAgcOV9BkWfBb6wyfi2UTm7u8VOVrH0VSV-WPVq4Oh0aN6k3KN4LkAbY&usqp=CAU' alt='Card image cap'><div class='card-body'><h4 class='card-title'>Multipla preto-laranja</h4><p class='card-text'>Um dos motivos deste carro ser uma das versões mais vendidas do Multipla é o fato dele ter um nitro que fornece força e velocidade para rivalizar comcarros atuais como uma Lamborghini. Garanta o seu agora!</p></div></div>",
    2:"<div class='card' id:'2'><img class='card-img-top' src='https://i.pinimg.com/originals/1c/c4/9a/1cc49a5c554a680b4a597dd946c4b718.jpg' alt='Card image cap'><div class='card-body'><h4 class='card-title'>Multipla branco</h4><p class='card-text'>Este Multipla possui o diferencial de ser perfeito para passeios na praia e em uma ida ao parque. Por isso virou o queridinho da galera!</p></div></div>",
    3:"<div class='card' id:'3'><img class='card-img-top' src='https://s1.cdn.autoevolution.com/images-webp/news/fugly-fiat-multipla-would-make-thomas-leave-165214-7.jpg.webp' alt='Card image cap'><div class='card-body'><h4 class='card-title'>Multipla versão Thomas</h4><p class='card-text'>Multipla inspirado no desenho Thomas e Seus Amigos com o diferencial de atrair crianças com facilidade quando passa na rua.</p></div></div>"
}));

const outrosCarros = new Map(Object.entries({
    4:"<div class='card' id:'4'><img class='card-img-top' src='http://gr8autophoto.com/images/tuning-fiat-multipla-03.jpg' alt='Card image cap'><div class='card-body'><h4 class='card-title'>Multipla tunado</h4><p class='card-text'>Multipla com rodas tunadas</p></div></div>",
    5:"<div class='card' id:'5'><img class='card-img-top' src='https://static.carthrottle.com/workspace/uploads/posts/2015/06/fiat-55895aa6770b2.jpg' alt='Card image cap'><div class='card-body'><h4 class='card-title'>Multipla marrom</h4><p class='card-text'>Multipla tunado na cor marrom</p></div></div>",
    6:"<div class='card' id:'6'><img class='card-img-top' src='https://i.pinimg.com/originals/e0/41/75/e041750b1c0a0369096694ec97434fc1.jpg' alt='Card image cap'><div class='card-body'><h4 class='card-title'>Multipla vermelho</h4><p class='card-text'>Multipla com fogo saindo pela frontal do carro</p></div></div>",
}));

window.onload = ()=>{
    //Carregar os 3 carros mais vendidos via JS
    let divTresCarrosMaisVendidos = document.getElementById('tresCarrosMaisVendidos');
    tresCarrosMaisVendidos.forEach((value,key)=>{
        divTresCarrosMaisVendidos.innerHTML +=value;
    })
    let btnMostrarMaisOuMenosOpcoes = document.getElementById('mostrarMaisOuMenosOpcoes');
    btnMostrarMaisOuMenosOpcoes.innerHTML='Mostrar mais opções';
}

const mostrarMaisOuMenosOpcoes = ()=>{
    let btnMostrarMaisOuMenosOpcoes = document.getElementById('mostrarMaisOuMenosOpcoes');
    let divOutrosCarrosVendidos = document.getElementById('outrosCarrosVendidos');
    if(btnMostrarMaisOuMenosOpcoes.innerHTML=='Mostrar mais opções'){
        outrosCarros.forEach((value,key)=>{
            divOutrosCarrosVendidos.innerHTML +=value;
        })
        btnMostrarMaisOuMenosOpcoes.innerHTML='Mostrar menos opções';
    }else{
        divOutrosCarrosVendidos.innerHTML = ""
        btnMostrarMaisOuMenosOpcoes.innerHTML='Mostrar mais opções';
    }
}

