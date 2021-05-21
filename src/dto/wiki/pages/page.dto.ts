import { WikiSectionDto } from './../sections/section.dto';
import { UserDto } from './../../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class WikiPageDto extends IdWithTimestampDto {
  @Expose()
  readonly title!: string;

  @Expose()
  readonly body!: string;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @Type(() => WikiSectionDto)
  readonly section!: WikiSectionDto;

  constructor(partial: Partial<WikiPageDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
