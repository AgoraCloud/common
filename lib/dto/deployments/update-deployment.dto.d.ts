export declare class UpdateDeploymentResourcesDto {
    readonly cpuCount?: number;
    readonly memoryCount?: number;
}
export declare class UpdateDeploymentPropertiesDto {
    readonly isFavorite?: boolean;
    readonly resources?: UpdateDeploymentResourcesDto;
}
export declare class UpdateDeploymentDto {
    readonly name?: string;
    readonly properties?: UpdateDeploymentPropertiesDto;
}
