import { ApiProperty } from '@nestjs/swagger';
import { mapToJson } from './../../transformers/map-to-json.transformer';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { UserDto } from '../users';

export enum RoleDto {
  User = 'user',
  SuperAdmin = 'super_admin',
  WorkspaceAdmin = 'workspace_admin',
}

export enum ActionDto {
  // User Actions
  ManageUser = 'users:manage',
  // Workspace Actions
  ManageWorkspace = 'workspaces:manage',
  CreateWorkspace = 'workspaces:create',
  ReadWorkspace = 'workspaces:read',
  UpdateWorkspace = 'workspaces:update',
  DeleteWorkspace = 'workspaces:delete',
  // Deployment Actions
  CreateDeployment = 'deployments:create',
  ReadDeployment = 'deployments:read',
  ProxyDeployment = 'deployments:proxy',
  UpdateDeployment = 'deployments:update',
  DeleteDeployment = 'deployments:delete',
  // Wiki Actions
  CreateWiki = 'wiki:create',
  ReadWiki = 'wiki:read',
  UpdateWiki = 'wiki:update',
  DeleteWiki = 'wiki:delete',
  // Wiki Section Actions
  CreateWikiSection = 'wiki_sections:create',
  ReadWikiSection = 'wiki_sections:read',
  UpdateWikiSection = 'wiki_sections:update',
  DeleteWikiSection = 'wiki_sections:delete',
  // Wiki Page Actions
  CreateWikiPage = 'wiki_pages:create',
  ReadWikiPage = 'wiki_pages:read',
  UpdateWikiPage = 'wiki_pages:update',
  DeleteWikiPage = 'wiki_pages:delete',
  // Project Actions
  CreateProject = 'projects:create',
  ReadProject = 'projects:read',
  UpdateProject = 'projects:update',
  DeleteProject = 'projects:delete',
  // Project Lane Actions
  CreateProjectLane = 'project_lanes:create',
  ReadProjectLane = 'project_lanes:read',
  UpdateProjectLane = 'project_lanes:update',
  DeleteProjectLane = 'project_lanes:delete',
  // Project Task Actions
  CreateProjectTask = 'project_tasks:create',
  ReadProjectTask = 'project_tasks:read',
  UpdateProjectTask = 'project_tasks:update',
  DeleteProjectTask = 'project_tasks:delete',
  // Shortcut Actions
  CreateShortcut = 'shortcuts:create',
  ReadShortcut = 'shortcuts:read',
  UpdateShortcut = 'shortcuts:update',
  DeleteShortcut = 'shortcuts:Delete',
}

export const WORKSPACE_ACTIONS_DTO: ActionDto[] = [
  ActionDto.CreateWorkspace,
  ActionDto.ReadWorkspace,
  ActionDto.UpdateWorkspace,
  ActionDto.DeleteWorkspace,
];

export const IN_WORKSPACE_ACTIONS_DTO: ActionDto[] = [
  ActionDto.CreateDeployment,
  ActionDto.ReadDeployment,
  ActionDto.ProxyDeployment,
  ActionDto.UpdateDeployment,
  ActionDto.DeleteDeployment,
  ActionDto.CreateWiki,
  ActionDto.ReadWiki,
  ActionDto.UpdateWiki,
  ActionDto.DeleteWiki,
  ActionDto.CreateWikiSection,
  ActionDto.ReadWikiSection,
  ActionDto.UpdateWikiSection,
  ActionDto.DeleteWikiSection,
  ActionDto.CreateWikiPage,
  ActionDto.ReadWikiPage,
  ActionDto.UpdateWikiPage,
  ActionDto.DeleteWikiPage,
  ActionDto.CreateProject,
  ActionDto.ReadProject,
  ActionDto.UpdateProject,
  ActionDto.DeleteProject,
  ActionDto.CreateProjectLane,
  ActionDto.ReadProjectLane,
  ActionDto.UpdateProjectLane,
  ActionDto.DeleteProjectLane,
  ActionDto.CreateProjectTask,
  ActionDto.ReadProjectTask,
  ActionDto.UpdateProjectTask,
  ActionDto.DeleteProjectTask,
  ActionDto.CreateShortcut,
  ActionDto.ReadShortcut,
  ActionDto.UpdateShortcut,
  ActionDto.DeleteShortcut,
];

@Exclude()
export class RolesAndPermissionsDto {
  @Expose()
  @ApiProperty({ enum: RoleDto, type: [RoleDto] })
  roles!: RoleDto[];

  @Expose()
  @ApiProperty({ enum: ActionDto, type: [ActionDto] })
  permissions!: ActionDto[];

  constructor(obj: RolesAndPermissionsDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class PermissionDto extends RolesAndPermissionsDto {
  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  readonly user!: UserDto;

  @Expose()
  @Type(() => Object)
  @ApiProperty()
  @Transform((value: any) => mapToJson(value))
  workspaces!: Map<string, RolesAndPermissionsDto>;

  constructor(obj: PermissionDto) {
    super(obj);
    Object.assign(this, obj);
  }
}
