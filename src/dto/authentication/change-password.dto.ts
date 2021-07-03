import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ minLength: 8 })
  readonly password!: string;

  @IsMongoId()
  @ApiProperty()
  readonly token!: string;

  constructor(obj: ChangePasswordDto) {
    Object.assign(this, obj);
  }
}
