import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../base.dto';
import { WorkspaceDto } from '../workspaces';

@Exclude()
export class ProjectDto extends IdWithTimestampDto {
  @Expose()
  readonly name!: string;

  @Expose()
  readonly description!: string;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;
}
