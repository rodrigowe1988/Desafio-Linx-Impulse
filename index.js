fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1").then((resposta) => {
    resposta.json().then((respostaJson) => {
        const listagemProdutos = document.querySelector(".listaDeProdutos")
        const dados = respostaJson.products;
        montarProdutos(dados, listagemProdutos)
    })
})

function montarProdutos(produtos, elemento) {
    for (const produto of produtos) {
        const li = document.createElement("li");
        li.innerHTML = `<div class="produto-1">
        <img class="imagemProduto" src="http:${produto.image}">
            <h3 class="nomeDoProduto">${produto.name}</h3>
            <p class="descricaoDoProduto">${produto.description}</p>
            <p class="precoInicial">R$ ${produto.oldPrice}</p>
            <p class="precoFinal">R$ ${produto.price}</p>
            <p class="precoParcelado">ou ${produto.installments.count}x de R$
            ${produto.installments.value}</p>
            <input type="button" value="Comprar" class="botaoComprar">`;

        elemento.append(li)
        
    }

}

const refreshButton = document.querySelector('.botao')

refreshButton.addEventListener("click", () =>{
    fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1").then((resposta) => {
    resposta.json().then((respostaJson) => {
        const listagemProdutos = document.querySelector(".listaDeProdutos")
        const dados = respostaJson.products;
        montarProdutos(dados, listagemProdutos)
    })
})
  
})