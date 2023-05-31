# Trybesmith 𐂫

Uma API no padrão REST de itens medievais, usando TypeScript e Sequelize. Essa API foi desenvolvida seguindo padrão MSC (model, service e controller), com autenticação de rotas usando JWT.

Os testes foram escritos usando Mocha, Chai e Sinon.

## Etiquetas

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Sequelize](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mocha](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/mcoutodev/trybesmith.git
```

Entre no diretório do projeto

```bash
  cd trybesmith
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor na porta 3001

```bash
  npm run start
```

## Documentação da API

#### Retorna todos os produtos

```http
  GET /products
```

#### Cadastra um novo produto

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do novo produto |
| `price`      | `string` | **Obrigatório**. O valor do novo produto. Ex: 30 peças de ouro |
| `orderId`      | `number` | **Opcional**. A id do pedido associado à esse item |

#### Faz login de um usuário cadastrado no sistema

```http
  POST /login
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**. Nome de usuário cadastrado |
| `password`      | `string` | **Obrigatório**. A senha cadastrada |

#### Retorna todos os pedidos

```http
  GET /orders
```

#### Cadastra um novo pedido

```http
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `number` | **Obrigatório**. O ID do usuário para o qual o pedido será atribuído |
| `productIds`      | `number[]` | **Obrigatório**. Um array com os IDs dos produtos cadastrados nesse pedido |
