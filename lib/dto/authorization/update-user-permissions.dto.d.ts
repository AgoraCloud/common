import { RoleDto, ActionDto } from './permission.dto';
export declare class UpdateUserPermissionsDto {
    roles: [RoleDto.User | RoleDto.SuperAdmin];
    permissions: ActionDto[];
}
