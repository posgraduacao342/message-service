import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Inject } from '@nestjs/common';
import {
  EmailPort,
  EmailPortKey,
} from 'src/infrastructure/email/port/EmailPort';
import { MensagemDto } from '../presenters/requests/MensagemDto';

export class EmailConsumer {
  constructor(
    @Inject(EmailPortKey)
    private readonly servicoEmail: EmailPort,
  ) {}

  @RabbitSubscribe({
    queue: 'enviar_email',
    exchange: 'amq.direct',
    routingKey: 'enviar.email',
  })
  async consume(mensagem: MensagemDto) {
    console.log('Mensagem', mensagem);
    await this.servicoEmail.enviarEmail(mensagem);
  }
}
