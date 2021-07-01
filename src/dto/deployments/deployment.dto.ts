import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { WorkspaceDto } from '../workspaces';
import { IdWithTimestampDto } from '../base.dto';

export enum DeploymentStatusDto {
  Pending = 'PENDING',
  Creating = 'CREATING',
  Running = 'RUNNING',
  Updating = 'UPDATING',
  Deleting = 'DELETING',
  Failed = 'FAILED',
  Unknown = 'UNKNOWN',
}

export enum DeploymentTypeDto {
  VSCode = 'VSCODE',
}

export const DEPLOYMENT_IMAGES_DTO: DeploymentImageDto[] = [
  // VSCode Deployments
  { type: DeploymentTypeDto.VSCode, version: '3.10.2' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.3' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.2' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.1' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.0' },
];

@Exclude()
export class DeploymentResourcesDto {
  @Expose()
  @ApiProperty()
  readonly cpuCount!: number;

  @Expose()
  @ApiProperty()
  readonly memoryCount!: number;

  @Expose()
  @ApiProperty({ required: false })
  readonly storageCount?: number;

  constructor(partial: Partial<DeploymentResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class DeploymentImageDto {
  @Expose()
  @ApiProperty({ enum: DeploymentTypeDto, type: DeploymentTypeDto })
  readonly type!: DeploymentTypeDto;

  @Expose()
  @ApiProperty()
  readonly version!: string;

  constructor(partial: Partial<DeploymentImageDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class DeploymentPropertiesDto {
  @Expose()
  @ApiProperty({ required: false })
  readonly isFavorite?: boolean;

  @Expose()
  @ApiProperty()
  @Type(() => DeploymentImageDto)
  readonly image!: DeploymentImageDto;

  @Expose()
  @ApiProperty()
  @Type(() => DeploymentResourcesDto)
  readonly resources!: DeploymentResourcesDto;

  constructor(partial: Partial<DeploymentPropertiesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class DeploymentDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly name!: string;

  @Expose()
  @ApiProperty({ enum: DeploymentStatusDto, type: DeploymentStatusDto })
  readonly status!: DeploymentStatusDto;

  @Expose()
  @ApiProperty({ required: false })
  readonly failureReason?: string;

  @Expose()
  @ApiProperty()
  @Type(() => DeploymentPropertiesDto)
  readonly properties!: DeploymentPropertiesDto;

  @Expose()
  @ApiProperty()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly user!: UserDto;

  constructor(partial: Partial<DeploymentDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
