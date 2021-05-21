import { IsArrayLength } from '../../validators/is-array-length.validator';
import { RoleDto, ActionDto, WorkspaceActionsDto } from './permission.dto';
import { IsIn, IsNotEmpty, IsString, Validate } from 'class-validator';

export class UpdateUserPermissionsDto {
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @Validate(IsArrayLength, [1], {
    message: 'a user must have one role only',
  })
  @IsIn([RoleDto.User, RoleDto.SuperAdmin], { each: true })
  roles!: [RoleDto.User | RoleDto.SuperAdmin];

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsIn(WorkspaceActionsDto, { each: true })
  permissions!: ActionDto[];

  constructor(partial: Partial<UpdateUserPermissionsDto>) {
    Object.assign(this, partial);
  }
}
