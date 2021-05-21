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
  readonly cpuCount?: number;

  @Min(0)
  @IsInt()
  @IsOptional()
  readonly memoryCount?: number;

  @Min(0)
  @IsInt()
  @IsOptional()
  readonly storageCount?: number;

  constructor(partial: Partial<UpdateWorkspaceResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateWorkspacePropertiesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateWorkspaceResourcesDto)
  readonly resources?: UpdateWorkspaceResourcesDto;

  constructor(partial: Partial<UpdateWorkspacePropertiesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateWorkspaceDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateWorkspacePropertiesDto)
  readonly properties?: UpdateWorkspacePropertiesDto;

  constructor(partial: Partial<UpdateWorkspaceDto>) {
    Object.assign(this, partial);
  }
}
