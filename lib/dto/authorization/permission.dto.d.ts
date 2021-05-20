import { UserDto } from '../users';
export declare enum RoleDto {
    User = "user",
    SuperAdmin = "super_admin",
    WorkspaceAdmin = "workspace_admin"
}
export declare enum ActionDto {
    ManageUser = "users:manage",
    ManageWorkspace = "workspaces:manage",
    CreateWorkspace = "workspaces:create",
    ReadWorkspace = "workspaces:read",
    UpdateWorkspace = "workspaces:update",
    DeleteWorkspace = "workspaces:delete",
    CreateDeployment = "deployments:create",
    ReadDeployment = "deployments:read",
    ProxyDeployment = "deployments:proxy",
    UpdateDeployment = "deployments:update",
    DeleteDeployment = "deployments:delete",
    CreateWiki = "wiki:create",
    ReadWiki = "wiki:read",
    UpdateWiki = "wiki:update",
    DeleteWiki = "wiki:delete",
    CreateWikiSection = "wiki_sections:create",
    ReadWikiSection = "wiki_sections:read",
    UpdateWikiSection = "wiki_sections:update",
    DeleteWikiSection = "wiki_sections:delete",
    CreateWikiPage = "wiki_pages:create",
    ReadWikiPage = "wiki_pages:read",
    UpdateWikiPage = "wiki_pages:update",
    DeleteWikiPage = "wiki_pages:delete",
    CreateProject = "projects:create",
    ReadProject = "projects:read",
    UpdateProject = "projects:update",
    DeleteProject = "projects:delete",
    CreateProjectLane = "project_lanes:create",
    ReadProjectLane = "project_lanes:read",
    UpdateProjectLane = "project_lanes:update",
    DeleteProjectLane = "project_lanes:delete",
    CreateProjectTask = "project_tasks:create",
    ReadProjectTask = "project_tasks:read",
    UpdateProjectTask = "project_tasks:update",
    DeleteProjectTask = "project_tasks:delete"
}
export declare const WorkspaceActionsDto: ActionDto[];
export declare const InWorkspaceActions: ActionDto[];
export declare class RolesAndPermissionsDto {
    roles: RoleDto[];
    permissions: ActionDto[];
}
export declare class PermissionDto extends RolesAndPermissionsDto {
    readonly user: UserDto;
    workspaces: Map<string, RolesAndPermissionsDto>;
}
