import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateShortcutDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ minLength: 4 })
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsUrl({ protocols: ['http', 'https'] })
  readonly link!: string;

  constructor(partial: Partial<CreateShortcutDto>) {
    Object.assign(this, partial);
  }
}
