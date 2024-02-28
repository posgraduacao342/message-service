export interface IMensagemEmail {
  remetente: {
    nome: string;
    email: string;
  };
  destinatario: string;
  assunto: string;
  conteudo: string;
}
