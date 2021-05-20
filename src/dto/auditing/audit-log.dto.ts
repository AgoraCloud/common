import { UserDto } from '../users';
import { Exclude, Expose, Type } from 'class-transformer';
import { WorkspaceDto } from '../workspaces';

export enum AuditActionDto {
  Create = 'CREATE',
  Read = 'READ',
  ReadImages = 'READ_IMAGES',
  ReadLogs = 'READ_LOGS',
  ReadMetrics = 'READ_METRICS',
  Proxy = 'PROXY',
  Update = 'UPDATE',
  Delete = 'DELETE',
  LogIn = 'LOG_IN',
  LogOut = 'LOG_OUT',
  ReadUsers = 'READ_USERS',
  AddUser = 'ADD_USER',
  RemoveUser = 'REMOVE_USER',
}

export enum AuditResourceDto {
  User = 'USER',
  Permission = 'PERMISSION',
  AuditLog = 'AUDIT_LOG',
  Workspace = 'WORKSPACE',
  Deployment = 'DEPLOYMENT',
  Project = 'PROJECT',
  ProjectLane = 'PROJECT_LANE',
  ProjectTask = 'PROJECT_TASK',
  WikiSection = 'WIKI_SECTION',
  WikiPage = 'WIKI_PAGE',
}

@Exclude()
export class AuditLogDto {
  @Expose()
  isSuccessful!: boolean;

  @Expose()
  failureReason?: string;

  @Expose()
  action!: AuditActionDto;

  @Expose()
  resource!: AuditResourceDto;

  @Expose({ name: 'createdAt' })
  date!: Date;

  @Expose()
  userAgent!: string;

  @Expose()
  ip!: string;

  @Expose()
  @Type(() => UserDto)
  user!: UserDto;

  @Expose()
  @Type(() => WorkspaceDto)
  workspace?: WorkspaceDto;
}
