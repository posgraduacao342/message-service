import { IMensagemEmail } from '../interfaces/IMensagemEmail';

export const EmailPortKey = 'EmailPort';

export interface EmailPort {
  enviarEmail(mensagem: IMensagemEmail): Promise<void>;
}
