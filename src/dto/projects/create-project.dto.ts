import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ minLength: 4 })
  readonly name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  @ApiProperty({ minLength: 1, required: false })
  readonly description?: string;

  constructor(obj: CreateProjectDto) {
    Object.assign(this, obj);
  }
}
