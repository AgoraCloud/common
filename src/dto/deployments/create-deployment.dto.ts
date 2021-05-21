import { IsValidDeploymentImage } from './../../validators/is-valid-deployment-image.validator';
import { DeploymentTypeDto } from './deployment.dto';
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

export class CreateDeploymentImageDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(DeploymentTypeDto)
  readonly type!: DeploymentTypeDto;

  @IsString()
  @IsNotEmpty()
  readonly version!: string;

  constructor(partial: Partial<CreateDeploymentImageDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateDeploymentResourcesDto {
  @Min(1)
  @IsInt()
  readonly cpuCount!: number;

  @Min(2)
  @IsInt()
  readonly memoryCount!: number;

  @Min(8)
  @IsInt()
  @IsOptional()
  readonly storageCount?: number;

  constructor(partial: Partial<CreateDeploymentResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateDeploymentPropertiesDto {
  @IsBoolean()
  @IsOptional()
  readonly isFavorite?: boolean;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateDeploymentImageDto)
  @Validate(IsValidDeploymentImage)
  readonly image!: CreateDeploymentImageDto;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateDeploymentResourcesDto)
  readonly resources!: CreateDeploymentResourcesDto;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  sudoPassword!: string;

  constructor(partial: Partial<CreateDeploymentPropertiesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class CreateDeploymentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  readonly name!: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateDeploymentPropertiesDto)
  readonly properties!: CreateDeploymentPropertiesDto;

  constructor(partial: Partial<CreateDeploymentDto>) {
    Object.assign(this, partial);
  }
}
