import { RoleDto, ActionDto } from './permission.dto';
export declare class UpdateWorkspaceUserPermissionsDto {
    roles: [RoleDto.User | RoleDto.WorkspaceAdmin];
    permissions: ActionDto[];
}
