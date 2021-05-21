import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../base.dto';

@Exclude()
export class WorkspaceResourcesDto {
  @Expose()
  readonly cpuCount?: number;

  @Expose()
  readonly memoryCount?: number;

  @Expose()
  readonly storageCount?: number;

  constructor(partial: Partial<WorkspaceResourcesDto>) {
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class WorkspacePropertiesDto {
  @Expose()
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
  readonly name!: string;

  @Expose()
  @Type(() => WorkspacePropertiesDto)
  readonly properties?: WorkspacePropertiesDto;

  @Expose()
  @Type(() => UserDto)
  readonly users!: UserDto[];

  constructor(partial: Partial<WorkspaceDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
