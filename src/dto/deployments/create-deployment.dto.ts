import { IsValidDeploymentImage } from './../../validators/is-valid-deployment-image.validator';
import { DeploymentTypeDto, DeploymentVersionDto } from './deployment.dto';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
  Validate,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeploymentImageDto {
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

  constructor(obj: CreateDeploymentImageDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateDeploymentResourcesDto {
  @Min(1)
  @IsInt()
  @ApiProperty({ minimum: 1 })
  readonly cpuCount!: number;

  @Min(2)
  @IsInt()
  @ApiProperty({ minimum: 2 })
  readonly memoryCount!: number;

  @Min(8)
  @IsInt()
  @IsOptional()
  @ApiProperty({ minimum: 8, required: false })
  readonly storageCount?: number;

  constructor(obj: CreateDeploymentResourcesDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateDeploymentPropertiesDto {
  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly isFavorite?: boolean;

  @IsDefined()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateDeploymentImageDto)
  @Validate(IsValidDeploymentImage)
  readonly image!: CreateDeploymentImageDto;

  @IsDefined()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateDeploymentResourcesDto)
  readonly resources!: CreateDeploymentResourcesDto;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ minLength: 8 })
  sudoPassword!: string;

  constructor(obj: CreateDeploymentPropertiesDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateDeploymentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ minLength: 4 })
  readonly name!: string;

  @IsDefined()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateDeploymentPropertiesDto)
  readonly properties!: CreateDeploymentPropertiesDto;

  constructor(obj: CreateDeploymentDto) {
    Object.assign(this, obj);
  }
}
