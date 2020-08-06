<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://fullcycle.com.br/wp-content/themes/fullcycle-blog/application/img/logo-fullcycle.png"/></a>
</p>

## Descrição

Exemplo de integração do RabbitMQ com aplicações Node.js usando Docker.

## Rodar o projeto

Executar ```docker-compose up``` - Levanta todos os containers, inclusive o RabbitMQ.

### Testar a comunicação

* Com a extensão Rest Client do VSCode, abra o arquivo **rest.http** e faça requisições da aplicação Express ou Nest e verifique o retorno no console da aplicação contrária.
* Envie requisições POST para **http://localhost:3001/express** ou **http://localhost:3000/express** enviando um JSON no corpo da requisição e verifique o retorno no console da aplicação contrária.

