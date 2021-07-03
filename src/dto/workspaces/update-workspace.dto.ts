import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UpdateWorkspaceResourcesDto {
  @Min(0)
  @IsInt()
  @IsOptional()
  @ApiProperty({ minimum: 0, required: false })
  readonly cpuCount?: number;

  @Min(0)
  @IsInt()
  @IsOptional()
  @ApiProperty({ minimum: 0, required: false })
  readonly memoryCount?: number;

  @Min(0)
  @IsInt()
  @IsOptional()
  @ApiProperty({ minimum: 0, required: false })
  readonly storageCount?: number;

  constructor(obj: UpdateWorkspaceResourcesDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateWorkspacePropertiesDto {
  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateWorkspaceResourcesDto)
  readonly resources?: UpdateWorkspaceResourcesDto;

  constructor(obj: UpdateWorkspacePropertiesDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateWorkspaceDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  @ApiProperty({ minLength: 4, required: false })
  readonly name?: string;

  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateWorkspacePropertiesDto)
  readonly properties?: UpdateWorkspacePropertiesDto;

  constructor(obj: UpdateWorkspaceDto) {
    Object.assign(this, obj);
  }
}
