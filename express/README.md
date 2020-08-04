<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://fullcycle.com.br/wp-content/themes/fullcycle-blog/application/img/logo-fullcycle.png"/></a>
</p>

## Descrição

Projeto Back-end para se começar com TypeScript de forma produtiva.

## Motivação

O entendimento do que é o TypeScript é simples, todos sabemos que é uma linguagem de programação com tipagem 
para dar outra dinâmica a programação JavaScript.

Instalar o TypeScript e roda-lo em cima de scripts .ts também é simples.

Porém, na hora de criar aplicações com Node.js a história pode ser um pouco diferente. 
Temos inicialmente dois problemas:

* Qual sistema de módulos utilizar para carregar os arquivos JavaScript?
* Como organizar o esqueleto do projeto para permitir separar a separação do TypeScript de desenvolvimento e JavaScript de produção?
* Como organizar o ambiente de desenvolvimento para usar diretamente o TypeScript?

Hoje com o Node.js fica bem mais simples trabalhar com módulos, já que ele suporta não só CommonJS, mas também ES6 Modules de forma nativa e isto é facilmente configurável no TypeScript, mas é necessário organizar as configurações no projeto.

Hoje também é possível trabalhar com TypeScript diretamente no desenvolvimento sem a necessidade de
compilar para JavaScript a cada modificação, então podemos executar a aplicação TypeScript com Node,
mas é necessário organizar as configurações no projeto.

Este pacote é uma forma produtiva de se começar com TypeScript com Node.js.

## Instalação

* Node.js
* Faça o clone do projeto
* Execute o comando ```npm install```

## Rodar o projeto

* ```npm start``` - Executa a aplicação com ts-node e roda um servidor em http://localhost:3000 para testar o projeto.
* ```npm run build``` - Compila o TypeScript em modo produção.
* ```npm run prod``` - Levanta a aplicação JavaScript com Node compilada pelo npm run build.
* ```npm run ts-node``` - Execute o ts-node. Ferramenta para executar o TypeScript com Node, é possível abrir um console e testar expressões como executar diretamente arquivos TypeScript

## Apêndice

No branch **using_webpack** há um exemplo de como desenvolver esta aplicação criando um front-end
também com TypeScript. A configuração do front-end foi baseada no repositório [https://github.com/codeedu/typescript-starter](https://github.com/codeedu/typescript-starter).

O frontend está embutido neste projeto, mas poderíamos também organizar o projeto em duas pastas:

```
- backend
- frontend
```

### Rodar o projeto

* ```npm run frontend-dev``` - Compila o TypeScript em modo desenvolvimento.
* ```npm run frontend-watch``` - Compila o TypeScript em modo desenvolvimento usando modo watch.
* ```npm run frontend-prod``` - Compila o TypeScript em modo produção.
