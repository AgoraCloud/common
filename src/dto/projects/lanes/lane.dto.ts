import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './../../users/user.dto';
import { ProjectDto } from './../project.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class ProjectLaneDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly name!: string;

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

  constructor(partial: Partial<ProjectLaneDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
