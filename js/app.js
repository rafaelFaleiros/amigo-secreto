let amigos = [];
let sorteados = [];
let amigosSorteados = [];
let sorteio = 0;

function adicionar (){
    let nome = document.getElementById('nome-amigo').value;
    amigos.push(nome);
    console.log(amigos);
    document.getElementById('lista-amigos').innerHTML = amigos;
}

function sortear(){
    while(sorteados.length <amigos.length){

        let selecionado = parseInt(Math.random() * amigos.length);

        if (sorteados.includes(selecionado)){
            return sortear();
        }
        else{
                amigosSorteados.push(amigos[selecionado]);
                let listaSorteio = document.getElementById('lista-sorteio');
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[selecionado];

            if(sorteio == 0){
                listaSorteio.innerHTML = listaSorteio.innerHTML + ' -> ';
                sorteio = 1;
            }
            else{
                sorteio = 0;
                listaSorteio.innerHTML = listaSorteio.innerHTML + '<br>';
            }
          
        }
        sorteados.push(selecionado);

}
}


function reiniciar(){
    amigos = [];
    sorteados = [];
    amigosSorteados = [];
    sorteio = 0;
    document.getElementById('lista-amigos').innerHTML = amigos;
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = amigosSorteados;
}