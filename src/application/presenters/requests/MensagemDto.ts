import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MensagemDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  assunto: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destinatario: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  texto: string;
}
