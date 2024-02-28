import { IMensagemEmail } from '../interfaces/IMensagemEmail';

export const SesServicePortKey = 'SesServicePort';

export interface SesServicePort {
  enviarEmail(mensagem: IMensagemEmail): Promise<void>;
}
