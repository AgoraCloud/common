import { UserDto } from '../users';
import { WorkspaceDto } from '../workspaces';
export declare enum AuditActionDto {
    Create = "CREATE",
    Read = "READ",
    ReadImages = "READ_IMAGES",
    ReadLogs = "READ_LOGS",
    ReadMetrics = "READ_METRICS",
    Proxy = "PROXY",
    Update = "UPDATE",
    Delete = "DELETE",
    LogIn = "LOG_IN",
    LogOut = "LOG_OUT",
    ReadUsers = "READ_USERS",
    AddUser = "ADD_USER",
    RemoveUser = "REMOVE_USER"
}
export declare enum AuditResourceDto {
    User = "USER",
    Permission = "PERMISSION",
    AuditLog = "AUDIT_LOG",
    Workspace = "WORKSPACE",
    Deployment = "DEPLOYMENT",
    Project = "PROJECT",
    ProjectLane = "PROJECT_LANE",
    ProjectTask = "PROJECT_TASK",
    WikiSection = "WIKI_SECTION",
    WikiPage = "WIKI_PAGE"
}
export declare class AuditLogDto {
    isSuccessful: boolean;
    failureReason?: string;
    action: AuditActionDto;
    resource: AuditResourceDto;
    date: Date;
    userAgent: string;
    ip: string;
    user: UserDto;
    workspace?: WorkspaceDto;
}
