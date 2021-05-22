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
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class WorkspacePropertiesDto {
  @Expose()
  @Type(() => WorkspaceResourcesDto)
  readonly resources?: WorkspaceResourcesDto;
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
}
