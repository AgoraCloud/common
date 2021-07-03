import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class VerifyAccountDto {
  @IsMongoId()
  @ApiProperty()
  readonly token!: string;

  constructor(obj: VerifyAccountDto) {
    Object.assign(this, obj);
  }
}
