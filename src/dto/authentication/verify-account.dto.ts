import { IsMongoId } from 'class-validator';

export class VerifyAccountDto {
  @IsMongoId()
  readonly token!: string;

  constructor(partial: Partial<VerifyAccountDto>) {
    Object.assign(this, partial);
  }
}
