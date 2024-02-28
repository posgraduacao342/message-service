import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mensagem')
@Controller('mensagem')
export class MensagemController {
  constructor() {}

  @Post('enviar/e-mail')
  enviarEmail() {
    return 'ok';
  }
}
