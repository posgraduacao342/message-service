import { Resend } from 'resend';
import { IMensagemEmail } from '../interfaces/IMensagemEmail';
import { EmailPort } from '../port/EmailPort';

export class ResendService implements EmailPort {
  private readonly clienteResend: Resend;
  private readonly htmlBase = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante FIAP (Email Fake)</title>
    </head>
    <body>
    <h1>Restaurante FIAP (Email Fake)</h1>
    <p>$Paragrafo</p>
    </body>
    </html>
  `;

  constructor() {
    console.log('RESEND_KEY', process.env.RESEND_KEY);
    this.clienteResend = new Resend(process.env.RESEND_KEY);
  }

  private atualizarParagrafo(paragrafo: string) {
    return this.htmlBase.replace('$Paragrafo', paragrafo);
  }

  async enviarEmail(mensagem: IMensagemEmail): Promise<void> {
    console.log('EMAIL_DEFAULT', process.env.EMAIL_DEFAULT);
    console.log('EMAIL_DEFAULT', process.env.EMAIL_DEFAULT);
    console.log('DESTINATARIO', process.env.DESTINATARIO);
    await this.clienteResend.emails.send({
      from: process.env.EMAIL_DEFAULT,
      subject: mensagem.assunto,
      to: process.env.DESTINATARIO,
      html: this.atualizarParagrafo(mensagem.texto),
    });
  }
}
