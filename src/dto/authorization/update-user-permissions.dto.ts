import { IsArrayLength } from '../../validators/is-array-length.validator';
import { RoleDto, ActionDto, WORKSPACE_ACTIONS_DTO } from './permission.dto';
import { IsIn, IsNotEmpty, IsString, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserPermissionsDto {
  @ApiProperty({
    enum: [RoleDto.User, RoleDto.SuperAdmin],
    type: [RoleDto.User, RoleDto.SuperAdmin],
  })
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @Validate(IsArrayLength, [1], {
    message: 'a user must have one role only',
  })
  @IsIn([RoleDto.User, RoleDto.SuperAdmin], { each: true })
  roles!: [RoleDto.User | RoleDto.SuperAdmin];

  @ApiProperty({ enum: WORKSPACE_ACTIONS_DTO, type: WORKSPACE_ACTIONS_DTO })
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsIn(WORKSPACE_ACTIONS_DTO, { each: true })
  permissions!: ActionDto[];

  constructor(partial: Partial<UpdateUserPermissionsDto>) {
    Object.assign(this, partial);
  }
}
