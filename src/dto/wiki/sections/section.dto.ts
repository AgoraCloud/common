import { UserDto } from './../../users/user.dto';

import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class WikiSectionDto extends IdWithTimestampDto {
  @Expose()
  readonly name!: string;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;
}
