import SES from 'aws-sdk/clients/ses';
import { IMensagemEmail } from '../interfaces/IMensagemEmail';

export class SesService {
  private readonly client: SES;

  constructor() {
    this.client = new SES({
      region: 'us-east-1',
    });
  }

  async enviarEmail(mensagem: IMensagemEmail): Promise<void> {
    await this.client
      .sendEmail({
        Source: `${mensagem.remetente.nome} <${mensagem.remetente.email}>`,
        Destination: {
          ToAddresses: [mensagem.destinatario],
        },
        Message: {
          Subject: {
            Data: mensagem.assunto,
          },
          Body: {
            Html: {
              Data: mensagem.conteudo,
            },
          },
        },
        Tags: [
          {
            Name: 'identificator',
            Value: mensagem.destinatario.replace('@', '').replace(/\./g, ''),
          },
        ],
        ConfigurationSetName: 'Umbriel',
      })
      .promise();
  }
}
