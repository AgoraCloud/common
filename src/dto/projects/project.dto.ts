import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../base.dto';
import { WorkspaceDto } from '../workspaces';

@Exclude()
export class ProjectDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly name!: string;

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

  constructor(partial: Partial<ProjectDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
