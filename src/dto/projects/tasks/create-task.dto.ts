import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateProjectTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({ minLength: 1 })
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  @ApiProperty({ minLength: 1, required: false })
  readonly description?: string;

  constructor(partial: Partial<CreateProjectTaskDto>) {
    Object.assign(this, partial);
  }
}
