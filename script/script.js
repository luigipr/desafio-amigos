
async function renderizarProdutos(categoria, container){

    const response = await fetch('./db.json');  // Certifique-se de que o caminho está correto
    const data = await response.json();
    const produtos = data.produtos; 


    // pegar a lista ul no html
    
    container.innerHTML = '';

    // percorrer a minha lista de Produtos
    for(let produto of produtos){
        // pergar receita por receita
        if (produto.categoria === categoria) {
        // criar um elemento <li>] e adicionar no meu elemento <ul>
        if (produto.vegano) {
            container.innerHTML += `
            <a href="./product.html?p=${produto.id}" class="products__list--item">
                <img src=${produto.imagem} alt="">
                <h3 class="products__list--price">R$ ${(produto.preco.por / 100).toFixed(2).replace('.', ',')} <span>R$ ${(produto.preco.de / 100).toFixed(2).replace('.', ',')}</span></h3>
                <h4 class="products__list--name">${produto.nome}</h4> 
                <div class="product__tag">
                    <img src="./image/Plant.png" alt="planta">
                    <span>Vegano</span>
                </div>
            </a>
        `} else {
            container.innerHTML += `
            <a href="./product.html?p=${produto.id}" class="products__list--item">
                <img src=${produto.imagem} alt="">
                <h3 class="products__list--price">R$ ${(produto.preco.por / 100).toFixed(2).replace('.', ',')} <span>R$ ${(produto.preco.de / 100).toFixed(2).replace('.', ',')}</span></h3>
                <h4 class="products__list--name">${produto.nome}</h4> 
            <div class="product__tag">
              <img src="./image/Cow.png" alt="Lactose">
              <span>Contém lactose</span>
            </div>
            </a>
            `
        }
        }
        }   
    }

async function getProductById(id) {
    const response = await fetch('./db.json');
    const data = await response.json();
    const produto = data.produtos.find(prod => prod.id == id);
    return produto
}

function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}