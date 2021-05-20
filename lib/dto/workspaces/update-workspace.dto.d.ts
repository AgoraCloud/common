export declare class UpdateWorkspaceResourcesDto {
    readonly cpuCount?: number;
    readonly memoryCount?: number;
    readonly storageCount?: number;
}
export declare class UpdateWorkspacePropertiesDto {
    readonly resources?: UpdateWorkspaceResourcesDto;
}
export declare class UpdateWorkspaceDto {
    readonly name?: string;
    readonly properties?: UpdateWorkspacePropertiesDto;
}
