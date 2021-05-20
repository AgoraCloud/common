import { UserDto } from './../../users/user.dto';
import { ProjectDto } from './../project.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class ProjectLaneDto extends IdWithTimestampDto {
  @Expose()
  readonly name!: string;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @Type(() => ProjectDto)
  readonly project!: ProjectDto;
}
