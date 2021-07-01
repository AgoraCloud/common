import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  Min,
  IsInt,
  ValidateNested,
  IsBoolean,
} from 'class-validator';

export class UpdateDeploymentResourcesDto {
  @Min(1)
  @IsInt()
  @IsOptional()
  @ApiProperty({ minimum: 1, required: false })
  readonly cpuCount?: number;

  @Min(2)
  @IsInt()
  @IsOptional()
  @ApiProperty({ minimum: 2, required: false })
  readonly memoryCount?: number;

  constructor(partial: Partial<UpdateDeploymentResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateDeploymentPropertiesDto {
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly isFavorite?: boolean;

  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateDeploymentResourcesDto)
  readonly resources?: UpdateDeploymentResourcesDto;

  constructor(partial: Partial<UpdateDeploymentPropertiesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateDeploymentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  @ApiProperty({ minLength: 4, required: false })
  readonly name?: string;

  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateDeploymentPropertiesDto)
  readonly properties?: UpdateDeploymentPropertiesDto;

  constructor(partial: Partial<UpdateDeploymentDto>) {
    Object.assign(this, partial);
  }
}
