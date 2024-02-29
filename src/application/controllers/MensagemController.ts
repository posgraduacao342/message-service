import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  EmailPort,
  EmailPortKey,
} from 'src/infrastructure/email/port/EmailPort';
import { MensagemDto } from '../presenters/requests/MensagemDto';

@ApiTags('Mensagem')
@Controller('mensagem')
export class MensagemController {
  constructor(
    @Inject(EmailPortKey)
    private readonly email: EmailPort,
  ) {}

  @Post('enviar/e-mail')
  async enviarEmail(@Body() mensagem: MensagemDto) {
    await this.email.enviarEmail(mensagem);
    return 'ok';
  }
}
