import { IsEmail } from 'class-validator';

export class ForgotPasswordDto {
  @IsEmail()
  readonly email!: string;

  constructor(partial: Partial<ForgotPasswordDto>) {
    Object.assign(this, partial);
  }
}
