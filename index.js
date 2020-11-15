fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1").then((resposta) => {
    resposta.json().then((respostaJson) => {
        const listagemProdutos = document.querySelector(".listaDeProdutos")
        const dados = respostaJson.products;
        bringProductsFromAPI(dados, listagemProdutos)
    })
})

function bringProductsFromAPI(products, elemento) {
    for (const product of products) {
        const li = document.createElement("li");
        li.innerHTML = `<div class="products1">
        <img class="productImage" src="http:${product.image}">
            <h3 class="productNamae">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
            <p class="firstPrice">R$ ${product.oldPrice}</p>
            <p class="finalPrice">R$ ${product.price}</p>
            <p class="partPrice">ou ${product.installments.count}x de R$
            ${product.installments.value}</p>
            <input type="button" value="Comprar" class="botaoComprar">`;

        elemento.append(li)
        
    }

}