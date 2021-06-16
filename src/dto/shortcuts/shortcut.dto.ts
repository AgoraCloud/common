import { WorkspaceDto } from './../workspaces/workspace.dto';
import { UserDto } from './../users/user.dto';
import { Expose, Type } from 'class-transformer';
import { IdWithTimestampDto } from '../base.dto';

export class ShortcutDto extends IdWithTimestampDto {
  @Expose()
  readonly title!: string;

  @Expose()
  readonly link!: string;

  @Expose()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @Type(() => WorkspaceDto)
  readonly workspace!: WorkspaceDto;

  constructor(partial: Partial<ShortcutDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
