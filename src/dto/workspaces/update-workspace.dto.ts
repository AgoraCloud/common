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

  constructor(partial: Partial<UpdateWorkspaceResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateWorkspacePropertiesDto {
  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
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
  @ApiProperty({ minLength: 4, required: false })
  readonly name?: string;

  @IsOptional()
  @ValidateNested()
  @ApiProperty({ required: false })
  @Type(() => UpdateWorkspacePropertiesDto)
  readonly properties?: UpdateWorkspacePropertiesDto;

  constructor(partial: Partial<UpdateWorkspaceDto>) {
    Object.assign(this, partial);
  }
}
