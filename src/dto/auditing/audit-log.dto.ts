import { ApiProperty } from '@nestjs/swagger';
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
  TurnOn = 'TURN_ON',
  TurnOff = 'TURN_OFF',
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
  Shortcut = 'SHORTCUT',
}

@Exclude()
export class AuditLogDto {
  @Expose()
  @ApiProperty()
  isSuccessful!: boolean;

  @Expose()
  @ApiProperty()
  failureReason?: string;

  @Expose()
  @ApiProperty({ enum: AuditActionDto })
  action!: AuditActionDto;

  @Expose()
  @ApiProperty({ enum: AuditResourceDto })
  resource!: AuditResourceDto;

  @ApiProperty()
  @Expose({ name: 'createdAt' })
  date!: Date;

  @Expose()
  @ApiProperty()
  userAgent!: string;

  @Expose()
  @ApiProperty()
  ip!: string;

  @Expose()
  @ApiProperty()
  @Type(() => UserDto)
  user!: UserDto;

  @Expose()
  @ApiProperty()
  @Type(() => WorkspaceDto)
  workspace?: WorkspaceDto;

  constructor(obj: AuditLogDto) {
    Object.assign(this, obj);
  }
}
