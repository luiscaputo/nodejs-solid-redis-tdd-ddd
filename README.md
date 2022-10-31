# nodejs-solid-redis-tdd-ddd
This repository was created to show how to use the best development practices and some additional patterns, in addition to using cashe is very common in software, however since it is also a challenge for some, I left it configured, how to use redis with docker.

<br/>

Este é um modelo de solução de uma API em Node.js & Typescript gestão de produtos imaginarios!


## 🚀 Tecnologias & Ferramentas utilizadas

* **[Node.js](https://nodejs.org/pt-br/)**
* **[TypeScript](https://www.typescriptlang.org/download)**
* **[Visual Studio Code](https://code.visualstudio.com/)**
* **[Insomnia](https://insomnia.rest/download)**
* **[Beekeeper](https://www.beekeeperstudio.io/get)**
* **[Git](https://git-scm.com/downloads)**
* **[Docker](https://www.docker.com/products/docker-desktop/)**
* **[Redis](https://redis.io/)**

<br/>

> ## Princípios aplicados 
* **S**ingle Responsibility Principle (SRP)
* **O**pen Closed Principle (OCP)
* **L**iskov Substitution Principle (LSP)
* **I**nterface Segregation Principle (ISP)
* **D**ependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance

> ## Design Patterns
* Dependency Injection
* Singleton

> ## Metodologias e Designs
* Clean Architecture
* Conventional Commits
* Use Cases

> ## Bibliotecas
* NPM
* Typescript
* Git
* Bcrypt
* JsonWebToken
* Express
* Eslint
* Jest
* IoRedis

> ## Features do Node
* API Rest com Express
* Logs de Erro
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares


> ## Features do Git
* Alias
* Log Personalizado
* Branch
* Tag
* Merge


> ## Features do Typescript
* POO
* Interface
* TypeAlias
* Namespace
* Utility Types

Recursos disponíveis para acesso via API ou endpoints(URI):

- **baseURL** - localhost:3331/v1/
- **products** - /products

| Método | Descrição                         |
| ------ | --------------------------------- |
| `POST` | `/products`                       |
| `GET`  | `/products/:id` e `/products` |   

um exemplo do funcionamento das rotas.

## Dependencias | Instalando o proejcto

# Normal

- Rode um yarn | npm install para baixar todas as dependências

# Via DOCKER

1. `docker-compose build/sudo docker-compose build` - no windows/Linux
2. `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3. `docker-compose up/docker-compose up` - Para rodar a aplicação também
4. Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando

Para rodar a aplicação siga os seguintes passos:
Primeiro: Crie as variáveis de ambiente `.env`, e dentro delas configure as variáveis de ambiente existentes no `.env.example`

## Métodos

Requisições para a API devem seguir os padrões:

| Método | Descrição |
| -------- | ----------------------------------------------------- |
| `GET`  | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT`  | Utilizado para atualizar um registro. |
| `DELETE` | Utilizado para remover um registro. |

## Rode o Projeto

- Para executar, basta:

| Comando                       | Descrição                      |
| ----------------------------- | ------------------------------ |
| `yarn test` ou `npm run test` | Rodando os testes da Aplicação |
| `yarn dev` ou `npm run dev`   | Rodando a aplicação em geral   |
| `yarn test`                   | Rodando os testes da Aplicação |
| `yarn lint`                   | Rodando os ajusts na Aplicação |


## Respostas

| Código | Descrição                                                          |
| ------ | ------------------------------------------------------------------ |
| `200`  | Requisição executada com sucesso (success).                        |
| `201`  | Registro Criado com sucesso.                                       |
| `400`  | Erros de validação ou os campos informados não existem no sistema. |
| `500`  | Erro interno do servidor.                                          |

## Padrão de Retorno dos dados

- Request (application/json)

  - Body

    ```
      {
        "success": true/false,
        "data": Object/String
      }
    ```

- Response 201 (application/json)

  - Body

    ```
      {
        "success": true,
        "data": [
          {
            "id": "69a9eff3-d4e6-43c1-a38d-a32367f6918b",
            "encripted_name": "dGVzdGU="
          }
        ]
      }
    ```

Caso a requisição não conter nenhuma resposta ou falhar o retorno será:

- Response 400(Aplication/json)

  ```
    {
      "success": false,
      "data": "Invalid User"
    }
  ```
  
  <hr>

<h4>Desenvolvido por: <strong style="color: #1f6feb; align: center">Luís Afonso Caputo</strong></h4>
