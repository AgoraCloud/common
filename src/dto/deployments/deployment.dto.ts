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

export const deploymentImages: DeploymentImageDto[] = [
  // VSCode Deployments
  { type: DeploymentTypeDto.VSCode, version: '3.9.3' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.2' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.1' },
  { type: DeploymentTypeDto.VSCode, version: '3.9.0' },
];

@Exclude()
export class DeploymentResourcesDto {
  @Expose()
  readonly cpuCount!: number;

  @Expose()
  readonly memoryCount!: number;

  @Expose()
  readonly storageCount?: number;

  constructor(partial: Partial<DeploymentResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class DeploymentImageDto {
  @Expose()
  readonly type!: DeploymentTypeDto;

  @Expose()
  readonly version!: string;

  constructor(partial: Partial<DeploymentImageDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class DeploymentPropertiesDto {
  @Expose()
  readonly isFavorite?: boolean;

  @Expose()
  @Type(() => DeploymentImageDto)
  readonly image!: DeploymentImageDto;

  @Expose()
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
  readonly name!: string;

  @Expose()
  readonly status!: DeploymentStatusDto;

  @Expose()
  readonly failureReason?: string;

  @Expose()
  @Type(() => DeploymentPropertiesDto)
  readonly properties!: DeploymentPropertiesDto;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;

  constructor(partial: Partial<DeploymentDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
