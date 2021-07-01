import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class VerifyAccountDto {
  @IsMongoId()
  @ApiProperty()
  readonly token!: string;

  constructor(partial: Partial<VerifyAccountDto>) {
    Object.assign(this, partial);
  }
}
