import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { WorkspaceDto } from '../workspaces';
import { IdWithTimestampDto } from '../base.dto';

export enum DeploymentScalingMethodDto {
  AlwaysOn = 'ALWAYS_ON',
  OnDemand = 'ON_DEMAND',
}

export enum DeploymentStatusDto {
  Pending = 'PENDING',
  Creating = 'CREATING',
  Running = 'RUNNING',
  Updating = 'UPDATING',
  Deleting = 'DELETING',
  Failed = 'FAILED',
  Stopped = 'STOPPED',
  Unknown = 'UNKNOWN',
}

export enum DeploymentTypeDto {
  VSCode = 'VSCODE',
  Ubuntu = 'UBUNTU',
}

export enum DeploymentVersionDto {
  VSCode_3_12_0 = '3.12.0',
  VSCode_3_11_1 = '3.11.1',
  VSCode_3_11_0 = '3.11.0',
  VSCode_3_10_2 = '3.10.2',
  VSCode_3_9_3 = '3.9.3',
  VSCode_3_9_2 = '3.9.2',
  VSCode_3_9_1 = '3.9.1',
  VSCode_3_9_0 = '3.9.0',
  Ubuntu_814b4f04 = '814b4f04',
  Ubuntu_37fd85aa = '37fd85aa',
}

export const DEPLOYMENT_IMAGES_DTO: DeploymentImageDto[] = [
  // VSCode Deployments
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_12_0,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_11_1,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_11_0,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_10_2,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_9_3,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_9_2,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_9_1,
  },
  {
    type: DeploymentTypeDto.VSCode,
    version: DeploymentVersionDto.VSCode_3_9_0,
  },
  // Ubuntu Deployments
  {
    type: DeploymentTypeDto.Ubuntu,
    version: DeploymentVersionDto.Ubuntu_814b4f04,
  },
  {
    type: DeploymentTypeDto.Ubuntu,
    version: DeploymentVersionDto.Ubuntu_37fd85aa,
  },
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

  constructor(obj: DeploymentResourcesDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class DeploymentImageDto {
  @Expose()
  @ApiProperty({ enum: DeploymentTypeDto, type: DeploymentTypeDto })
  readonly type!: DeploymentTypeDto;

  @Expose()
  @ApiProperty({ enum: DeploymentVersionDto, type: DeploymentVersionDto })
  readonly version!: DeploymentVersionDto;

  constructor(obj: DeploymentImageDto) {
    Object.assign(this, obj);
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
  readonly proxyUrl!: string;

  @Expose()
  @ApiProperty({
    enum: DeploymentScalingMethodDto,
    type: DeploymentScalingMethodDto,
  })
  readonly scalingMethod!: DeploymentScalingMethodDto;

  @Expose()
  @ApiProperty()
  @Type(() => DeploymentImageDto)
  readonly image!: DeploymentImageDto;

  @Expose()
  @ApiProperty()
  @Type(() => DeploymentResourcesDto)
  readonly resources!: DeploymentResourcesDto;

  constructor(obj: DeploymentPropertiesDto) {
    Object.assign(this, obj);
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

  constructor(obj: DeploymentDto) {
    super(obj);
    Object.assign(this, obj);
  }
}
