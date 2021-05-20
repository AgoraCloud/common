export declare class CreateWorkspaceResourcesDto {
    readonly cpuCount?: number;
    readonly memoryCount?: number;
    readonly storageCount?: number;
}
export declare class CreateWorkspacePropertiesDto {
    readonly resources?: CreateWorkspaceResourcesDto;
}
export declare class CreateWorkspaceDto {
    readonly name: string;
    readonly properties?: CreateWorkspacePropertiesDto;
}
