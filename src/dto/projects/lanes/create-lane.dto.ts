import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProjectLaneDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({ minLength: 1 })
  readonly name!: string;

  constructor(partial: Partial<CreateProjectLaneDto>) {
    Object.assign(this, partial);
  }
}
