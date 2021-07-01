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
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeploymentImageDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(DeploymentTypeDto)
  @ApiProperty({ enum: DeploymentTypeDto, type: DeploymentTypeDto })
  readonly type!: DeploymentTypeDto;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly version!: string;

  constructor(partial: Partial<CreateDeploymentImageDto>) {
    Object.assign(this, partial);
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

  constructor(partial: Partial<CreateDeploymentResourcesDto>) {
    Object.assign(this, partial);
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

  constructor(partial: Partial<CreateDeploymentPropertiesDto>) {
    Object.assign(this, partial);
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

  constructor(partial: Partial<CreateDeploymentDto>) {
    Object.assign(this, partial);
  }
}
