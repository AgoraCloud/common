import { ApiProperty } from '@nestjs/swagger';
import { WorkspaceDto } from './../workspaces/workspace.dto';
import { UserDto } from './../users/user.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../base.dto';

@Exclude()
export class ShortcutDto extends IdWithTimestampDto {
  @Expose()
  @ApiProperty()
  readonly title!: string;

  @Expose()
  @ApiProperty()
  readonly link!: string;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @ApiProperty()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  constructor(obj: ShortcutDto) {
    super(obj);
    Object.assign(this, obj);
  }
}
