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
  readonly title?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateProjectTaskLaneDto)
  readonly lane?: UpdateProjectTaskLaneDto;

  constructor(partial: Partial<UpdateProjectTaskDto>) {
    Object.assign(this, partial);
  }
}
