import { connect, Connection, Channel, Options, Replies } from "amqplib";

export default class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;
  
  constructor(private uri: string) {}

  async start(): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }

  async createQueue(
    queue,
    options?: Options.AssertQueue
  ): Promise<Replies.AssertQueue> {
    return this.channel.assertQueue(queue, options);
  }

  async bindQueueInExchange(
    queue: string,
    exchange: string,
    routingKey: string
  ): Promise<Replies.Empty> {
    return this.channel.bindQueue(queue, exchange, routingKey);
  }

  async publishInQueue(queue: string, message: any): Promise<boolean> {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: any
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }

  async consume(
    queue: string,
    callback: (message) => void
  ): Promise<Replies.Consume> {
    return this.channel.consume(queue, callback);
  }
}
