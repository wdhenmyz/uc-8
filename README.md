
# Projeto aplicativo de loja

1. Visão Geral
Nome do Projeto: Distribuidora Suplementos 

Descrição: um protótipo de um aplicativo de loja que vende Suplementos

Plataformas: Android

Versão Atual: 1.0.0



## Stack utilizada

**Front-end:** React, expo, typescript

**Back-end:** Node, Express, neon(API, banco de dados)

**Biblioteca e Ferramentas:** Expo CLI, Expo router (para navegação)



## Documentação da API

#### Retorna todos os produtos

```http
  GET /products
```

#### Retorna um produto

```http
  GET /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Retorna todos os produtos por categorias

```http
  GET /products/${idCategory}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `idCategory`      | `string` | **Obrigatório**. O IDCategory dos items que você quer |

#### Retorna todos as categorias

```http
  GET /categories
```

#### Retorna uma categoria

```http
  GET /categories/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da categoria que você quer |



## Estrutura do Projeto

#### Explicação básica da estrutura de pastas:

```http
    /app: guarda as páginas do aplicativo, contêm as tabs a ser acessadas
```
```http
    /components: Componentes reutilizáveis da aplicação.
```

```http
    /assets: imagens usadas na estilização do aplicativo em si
```

```http
    /routes: Configurações de rotas para requisisão e acesso a API.
```

```http
    /services: Serviços e chamadas de API.
```

```http
    /types: funções de tipagem para o aplicativo.
```

```http
    App.js: Arquivo principal do servidor para comunicação com neon.
```

## prints do aplicativo








## Configuração do Ambiente
**Pré-requisitos**:
Node.js (versão recomendada),
Expo CLI,
Editor de código (VSCode recomendado),


**Instalação do Projeto:**
```http
git clone https://github.com/wdhenmyz/uc-8.git
cd DIST.SUPL.v2
npm install 
npm install concurrently --save-dev
npm start
```

**nota:**
```http
depois de intallar concurrently vá no arquivo package.json
e Certifique-se de ter os seguintes scripts:

"scripts": {
  "start:expo": "expo start",
  "start:node": "node server.js", // ou o caminho do seu arquivo Node.js
  "start": "concurrently \"npm run start:expo\" \"npm run start:node\""
}

se não a API não irá de conectar com o banco de dados
```

**Configuração de Variáveis de Ambiente:**

## Funcionalidades

- Navegação entre telas
```http
Stacks: Navegação de pilha.
Tabs: Navegação em abas.
```

- Conexão com API
```http
- automaticamente o aplicativo ira realizar uma chamada de API para mostrar todos os
produtos e categorias
- Ao clicar em um produto ou categoria ira realizar uma chamada para trazer as 
informações do respectivo produto ou produtos de uma categoria
```

- autenticação e Página de usuário(prévia)
- calcular o valor total a pagar pelo número de produtos
```http
- na página do produto tem a opção de digitar a quantidade de produtos que deseja comprar,
o aplicativo irá calcular o valor total a pagar
```

## Rodando os testes

**Ferramentas recomendadas:** 

```bash
  ESLint:
https://eslint.org/docs/latest/use/getting-started

    Jest:
https://jestjs.io/docs/getting-started
```


## Deploy

Como usar o Expo Go para testar no seu dispositivo

```http
    quando npm start for iniciado com sucesso instale o Expo Go no seu dispositivo
    abra o Expo Go e aguarde o vscode mostrar um QRcode e aponte o seu dispositivo nele
    ou vai aparecer no terminal "Waiting on: <server>" e escreva o <server> manualmente
    na opção "Enter URL Manually"
```


## Feedback e Colaboração

Se você tiver algum feedback, por favor me deixe saber por meio de:

- wesllen.dhenmyz@outlook.com
- dhenmyzwesllen@gmail.com
- https://github.com/wdhenmyz


