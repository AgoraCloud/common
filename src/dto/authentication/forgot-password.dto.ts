import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ForgotPasswordDto {
  @IsEmail()
  @ApiProperty()
  readonly email!: string;

  constructor(obj: ForgotPasswordDto) {
    Object.assign(this, obj);
  }
}
