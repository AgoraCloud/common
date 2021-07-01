import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../base.dto';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class WorkspaceResourcesDto {
  @Expose()
  @ApiProperty({ required: false })
  readonly cpuCount?: number;

  @Expose()
  @ApiProperty({ required: false })
  readonly memoryCount?: number;

  @Expose()
  @ApiProperty({ required: false })
  readonly storageCount?: number;

  constructor(partial: Partial<WorkspaceResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class WorkspacePropertiesDto {
  @Expose()
  @ApiProperty({ required: false })
  @Type(() => WorkspaceResourcesDto)
  readonly resources?: WorkspaceResourcesDto;

  constructor(partial: Partial<WorkspacePropertiesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class WorkspaceDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly name!: string;

  @Expose()
  @ApiProperty({ required: false })
  @Type(() => WorkspacePropertiesDto)
  readonly properties?: WorkspacePropertiesDto;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly users!: UserDto[];

  constructor(partial: Partial<WorkspaceDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
