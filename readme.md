# Desafio Módulo 2

##### Coloque seu nome aqui: 

**Siga o Figma ou o Penpot que está na raiz do projeto chamado "desafioT15"**

### Instruções para entrega

- Crie um fork deste repositório
- Clone o repositório para sua máquina
- Faça o desafio
- Abra um PR (pull request), caso ainda não tenha feito (o PR é feito somente UMA vez)
- Adicione o seu nome no início deste arquivo

--- 
### Dicas

- Faça commits regulares. Dica: faça, pelo menos, um commit ao término de cada parte da página
- Quando terminar, lembre-se de atualizar seu repositório remoto (`git push`). Lembre-se que seu GitHub será seu portifólio. É sempre bom mantê-lo atualizado e ativo.

---
### O que você precisa fazer?
- Criar a interativida manipulando o DOM
- Criar o Carrinho

### Após a Aula Conhecendo DOM e Eventos DOM:
  
1. Criar um array de objetos com Javascript representando os produtos
2. Na Home: Injetar os produtos do array na página HTML dinamicamente, garantido que estejam na devida categoria

```js
  const produtos = [
    {
      "id": "7",
      "nome": "Mocha",
      "imagem": "./image/product-07.png",
      "descricao": "Imagine um Mocha como um abraço acolhedor em uma xícara. Com sua cor profunda e rica, ele é o convite perfeito para um momento de pausa. O aroma intenso que sobe suavemente é como um caloroso cumprimento, prometendo um instante de prazer e concentração. Ao dar o primeiro gole, a textura aveludada e o sabor robusto envolvem o paladar, oferecendo um equilíbrio encantador entre a doçura e a leve amargura. É um prazer pequeno, mas incrivelmente satisfatório, ideal para um rápido reequilíbrio durante o dia. Cada xícara é uma pausa deliciosa, um momento só seu, para recarregar e seguir em frente com renovada energia e tranquilidade.",
      "preco": {
        "de": 1000,
        "por": 800
      },
      "vegano": false,
      "categoria": "classicos"
    }
  ]
```

---

### Após a Aula Manipulando DOM:

1. Na Home: Adicione um link em cada produto que redirecione para a página, lembre de passar uma query para identificar o produto selecionado
   
```js
// ./produto.html?p=123
const params = new URLSearchParams(window.location.search)
const idProduto = params.get('p')
console.log('id do produto', idProduto)
```

2. Na Página de Produto: Adicione a funcionalidade de **Comprar**
3. Na Página de Produto: Adicione a funcionalidade de **Alterar a quantidade de Produtos**
4. Crie o layout do carrinho de compras seguindo as especificações do figma e penpot
5. Crie um novo array de objetos produtos para o carrinho adicionando os campos quantidade e observação
6. No carrinho: Adicione a funcionalidade de **Abrir e fechar o carrinho**


```js
  const produtosNoCarrinho = [
    {
      "id": "6b9f",
      "idProduto": "4",
      "nome": "Café com leite",
      "imagem": "./image/product-04.png",
      "preco": 1000,
      "vegano": false,
      "quantidade": "3",
      "observacao": ""
    }
  ]
```

---

### Após a Aula de Api Pt.1 e Api Pt.2:

1. Criar um arquivo db.json e use JSON Server como fake api
2. Fazer a integração com a fake api, substituindo o array de produtos e o array de produtos no carrinho
3. No carrinho: Adicione a funcionalidade de **Listar os Produtos**
4. No carrinho: Adicione a funcionalidade de **Deletar um produto**
5. No carrinho: Adicione a funcionalidade de **Alterar a quantidade do produto**
6. No carrinho: Adicione a funcionalidade de **Excluir todos os itens do carrinho**
7. No carrinho: Adicione a funcionalidade de **Calcular todos os dados (totais e quantidade)**


```bash
# Instalar node modules
npm init -y 

# Instalar json server globalmente
npm i json-server -g

# executar json-server
npx json-server db.json

# caso queira rodar em uma porta especifica
npx json-server db.json --port 3000
```
  
4. (opcional) Você pode usar o axios para realizar as requisições (recomendado) ou fetch do proprio js
```html
<!-- importe o axios na sua página -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
---

### (opcional) Após a Aula de Sass:
1. Converter os arquivos CSS para SASS.
2. Utilizar variáveis, aninhamento e mixins para melhorar a estrutura do código CSS.

---

# Importante:
- Mantenha seu código limpo e bem organizado.
- Use nomes de variáveis e funções que sejam semânticos e descritivos.
- Sempre que encontrar lógica repetida em mais de um lugar, crie uma função para encapsulá-la.
- Lembre-se de usar try e catch
- Guarde o preço do produto em centavos
