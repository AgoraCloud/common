import { UserDto } from './../users/user.dto';
import { IdWithTimestampDto } from '../base.dto';
export declare class WorkspaceResourcesDto {
    readonly cpuCount?: number;
    readonly memoryCount?: number;
    readonly storageCount?: number;
}
export declare class WorkspacePropertiesDto {
    readonly resources?: WorkspaceResourcesDto;
}
export declare class WorkspaceDto extends IdWithTimestampDto {
    readonly name: string;
    readonly properties?: WorkspacePropertiesDto;
    readonly users: UserDto[];
}
