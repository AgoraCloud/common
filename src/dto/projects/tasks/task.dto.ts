import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './../../users/user.dto';
import { ProjectLaneDto } from './../lanes/lane.dto';
import { ProjectDto } from './../project.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class ProjectTaskDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly title!: string;

  @Expose()
  @ApiProperty({ required: false })
  readonly description?: string;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @ApiProperty()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @ApiProperty()
  @Type(() => ProjectDto)
  readonly project!: ProjectDto;

  @Expose()
  @ApiProperty()
  @Type(() => ProjectLaneDto)
  readonly lane!: ProjectLaneDto;

  constructor(obj: ProjectTaskDto) {
    super(obj);
    Object.assign(this, obj);
  }
}
