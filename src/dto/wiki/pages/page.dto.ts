import { ApiProperty } from '@nestjs/swagger';
import { WikiSectionDto } from './../sections/section.dto';
import { UserDto } from './../../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../../base.dto';
import { WorkspaceDto } from '../../workspaces';

@Exclude()
export class WikiPageDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly title!: string;

  @Expose()
  @ApiProperty()
  readonly body!: string;

  @Expose()
  @ApiProperty()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @ApiProperty()
  @Type(() => WikiSectionDto)
  readonly section!: WikiSectionDto;

  constructor(partial: Partial<WikiPageDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
