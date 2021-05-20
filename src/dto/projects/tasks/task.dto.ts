import { UserDto } from './../../users/user.dto';
import { ProjectLaneDto } from './../lanes/lane.dto';
import { ProjectDto } from './../project.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class ProjectTaskDto extends IdWithTimestampDto {
  @Expose()
  readonly title!: string;

  @Expose()
  readonly description?: string;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @Type(() => ProjectDto)
  readonly project!: ProjectDto;

  @Expose()
  @Type(() => ProjectLaneDto)
  readonly lane!: ProjectLaneDto;
}
