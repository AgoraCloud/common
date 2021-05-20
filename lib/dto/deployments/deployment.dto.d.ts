import { UserDto } from './../users/user.dto';
import { WorkspaceDto } from '../workspaces';
import { IdWithTimestampDto } from '../base.dto';
export declare enum DeploymentStatusDto {
    Pending = "PENDING",
    Creating = "CREATING",
    Running = "RUNNING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Unknown = "UNKNOWN"
}
export declare enum DeploymentTypeDto {
    VSCode = "VSCODE"
}
export declare const deploymentImages: DeploymentImageDto[];
export declare class DeploymentResourcesDto {
    readonly cpuCount: number;
    readonly memoryCount: number;
    readonly storageCount?: number;
}
export declare class DeploymentImageDto {
    readonly type: DeploymentTypeDto;
    readonly version: string;
}
export declare class DeploymentPropertiesDto {
    readonly isFavorite?: boolean;
    readonly image: DeploymentImageDto;
    readonly resources: DeploymentResourcesDto;
}
export declare class DeploymentDto extends IdWithTimestampDto {
    readonly name: string;
    readonly status: DeploymentStatusDto;
    readonly failureReason?: string;
    readonly properties: DeploymentPropertiesDto;
    readonly workspace: WorkspaceDto;
    readonly user: UserDto;
}
