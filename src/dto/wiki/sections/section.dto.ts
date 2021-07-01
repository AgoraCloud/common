import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './../../users/user.dto';

import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class WikiSectionDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly name!: string;

  @Expose()
  @ApiProperty()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly user!: UserDto;

  constructor(partial: Partial<WikiSectionDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
