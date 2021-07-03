import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateWikiPageDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({ minLength: 1 })
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly body!: string;

  constructor(obj: CreateWikiPageDto) {
    Object.assign(this, obj);
  }
}
