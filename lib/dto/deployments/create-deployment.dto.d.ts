import { DeploymentTypeDto } from './deployment.dto';
export declare class CreateDeploymentImageDto {
    readonly type: DeploymentTypeDto;
    readonly version: string;
}
export declare class CreateDeploymentResourcesDto {
    readonly cpuCount: number;
    readonly memoryCount: number;
    readonly storageCount?: number;
}
export declare class CreateDeploymentPropertiesDto {
    readonly isFavorite?: boolean;
    readonly image: CreateDeploymentImageDto;
    readonly resources: CreateDeploymentResourcesDto;
    sudoPassword: string;
}
export declare class CreateDeploymentDto {
    readonly name: string;
    readonly properties: CreateDeploymentPropertiesDto;
}
