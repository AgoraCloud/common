import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ minLength: 4 })
  readonly fullName!: string;

  @IsEmail()
  @ApiProperty()
  readonly email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ minLength: 8 })
  readonly password!: string;

  constructor(obj: CreateUserDto) {
    Object.assign(this, obj);
  }
}
