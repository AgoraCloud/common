import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateWikiSectionDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({ minLength: 1 })
  readonly name!: string;

  constructor(partial: Partial<CreateWikiSectionDto>) {
    Object.assign(this, partial);
  }
}
