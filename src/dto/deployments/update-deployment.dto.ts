import { IsValidDeploymentImage } from './../../validators/is-valid-deployment-image.validator';
import { DeploymentVersionDto, DeploymentTypeDto } from './deployment.dto';
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
  IsEnum,
  Validate,
} from 'class-validator';

export class UpdateDeploymentImageDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(DeploymentTypeDto)
  @ApiProperty({ enum: DeploymentTypeDto, type: DeploymentTypeDto })
  readonly type!: DeploymentTypeDto;

  @IsString()
  @IsNotEmpty()
  @IsEnum(DeploymentVersionDto)
  @ApiProperty({ enum: DeploymentVersionDto, type: DeploymentVersionDto })
  readonly version!: DeploymentVersionDto;

  constructor(obj: UpdateDeploymentImageDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
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

  constructor(obj: UpdateDeploymentResourcesDto) {
    Object.assign(this, obj);
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
  @Type(() => UpdateDeploymentImageDto)
  @Validate(IsValidDeploymentImage)
  readonly image?: UpdateDeploymentImageDto;

  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateDeploymentResourcesDto)
  readonly resources?: UpdateDeploymentResourcesDto;

  constructor(obj: UpdateDeploymentPropertiesDto) {
    Object.assign(this, obj);
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

  constructor(obj: UpdateDeploymentDto) {
    Object.assign(this, obj);
  }
}
