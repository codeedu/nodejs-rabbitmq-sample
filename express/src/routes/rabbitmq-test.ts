import express from 'express';
import RabbitmqServer from '../rabbitmq-server';
const router = express.Router();

router.post('/express', async function(req, res, next) {
  
  const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
  await server.start();
  await server.publishInQueue('nest', JSON.stringify(req.body));
  await server.publishInExchange('amq.direct', 'rota', JSON.stringify(req.body));
  res.send(req.body);
});

export default router;
