import { IsArrayLength } from '../../validators/is-array-length.validator';
import { RoleDto, ActionDto, InWorkspaceActions } from './permission.dto';
import { IsIn, IsNotEmpty, IsString, Validate } from 'class-validator';

export class UpdateWorkspaceUserPermissionsDto {
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @Validate(IsArrayLength, [1], {
    message: 'a user must have one role only',
  })
  @IsIn([RoleDto.User, RoleDto.WorkspaceAdmin], { each: true })
  roles!: [RoleDto.User | RoleDto.WorkspaceAdmin];

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsIn(InWorkspaceActions, { each: true })
  permissions!: ActionDto[];
}
