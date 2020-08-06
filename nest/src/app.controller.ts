import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import RabbitmqServer from './rabbitmq-server';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('nest')
  async nest(@Req() request: Request){
    const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
    await server.start();
    await server.publishInQueue('express', JSON.stringify(request.body));
    await server.publishInExchange('amq.direct','rota2', JSON.stringify(request.body));
    return request.body
  }
}
