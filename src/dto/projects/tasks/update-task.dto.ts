import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UpdateProjectTaskLaneDto {
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly id?: string;

  constructor(partial: Partial<UpdateProjectTaskLaneDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateProjectTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  @ApiProperty({ minLength: 1, required: false })
  readonly title?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  @ApiProperty({ minLength: 1, required: false })
  readonly description?: string;

  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateProjectTaskLaneDto)
  readonly lane?: UpdateProjectTaskLaneDto;

  constructor(partial: Partial<UpdateProjectTaskDto>) {
    Object.assign(this, partial);
  }
}
