import {
  DeploymentTypeDto,
  DeploymentVersionDto,
  DeploymentScalingMethodDto,
  DeploymentStatusDto,
} from './deployment.dto';

export enum DeploymentTypeLabelDto {
  VSCode = 'VSCode',
  Ubuntu = 'Ubuntu',
}

export enum DeploymentVersionLabelDto {
  VSCode_3_12_0 = 'v3.12.0',
  VSCode_3_11_1 = 'v3.11.1',
  VSCode_3_11_0 = 'v3.11.0',
  VSCode_3_10_2 = 'v3.10.2',
  VSCode_3_9_3 = 'v3.9.3',
  VSCode_3_9_2 = 'v3.9.2',
  VSCode_3_9_1 = 'v3.9.1',
  VSCode_3_9_0 = 'v3.9.0',
  Ubuntu_814b4f04 = 'v1.1.0',
  Ubuntu_37fd85aa = 'v1.0.0',
}

export enum DeploymentScalingMethodLabelDto {
  AlwaysOn = 'Always On',
  OnDemand = 'On Demand',
}

export enum DeploymentStatusLabelDto {
  Pending = 'Pending',
  Creating = 'Creating',
  Running = 'Running',
  Updating = 'Updating',
  Deleting = 'Deleting',
  Failed = 'Failed',
  Stopped = 'Stopped',
  Unknown = 'Unknown',
}

export const DEPLOYMENT_TYPE_LABEL_DTO_MAP: Record<
  DeploymentTypeDto,
  DeploymentTypeLabelDto
> = {
  VSCODE: DeploymentTypeLabelDto.VSCode,
  UBUNTU: DeploymentTypeLabelDto.Ubuntu,
};

export const DEPLOYMENT_VERSION_LABEL_DTO_MAP: Record<
  DeploymentVersionDto,
  DeploymentVersionLabelDto
> = {
  '3.12.0': DeploymentVersionLabelDto.VSCode_3_12_0,
  '3.11.1': DeploymentVersionLabelDto.VSCode_3_11_1,
  '3.11.0': DeploymentVersionLabelDto.VSCode_3_11_0,
  '3.10.2': DeploymentVersionLabelDto.VSCode_3_10_2,
  '3.9.3': DeploymentVersionLabelDto.VSCode_3_9_3,
  '3.9.2': DeploymentVersionLabelDto.VSCode_3_9_2,
  '3.9.1': DeploymentVersionLabelDto.VSCode_3_9_1,
  '3.9.0': DeploymentVersionLabelDto.VSCode_3_9_0,
  '814b4f04': DeploymentVersionLabelDto.Ubuntu_814b4f04,
  '37fd85aa': DeploymentVersionLabelDto.Ubuntu_37fd85aa,
};

export const DEPLOYMENT_SCALING_METHOD_LABEL_DTO_MAP: Record<
  DeploymentScalingMethodDto,
  DeploymentScalingMethodLabelDto
> = {
  ALWAYS_ON: DeploymentScalingMethodLabelDto.AlwaysOn,
  ON_DEMAND: DeploymentScalingMethodLabelDto.OnDemand,
};

export const DEPLOYMENT_STATUS_LABEL_DTO_MAP: Record<
  DeploymentStatusDto,
  DeploymentStatusLabelDto
> = {
  PENDING: DeploymentStatusLabelDto.Pending,
  CREATING: DeploymentStatusLabelDto.Creating,
  RUNNING: DeploymentStatusLabelDto.Running,
  UPDATING: DeploymentStatusLabelDto.Updating,
  DELETING: DeploymentStatusLabelDto.Deleting,
  FAILED: DeploymentStatusLabelDto.Failed,
  STOPPED: DeploymentStatusLabelDto.Stopped,
  UNKNOWN: DeploymentStatusLabelDto.Unknown,
};

/**
 * A deployment labeling utility class, used to generate user-friendly labels
 * for consumption by the UI
 */
export class DeploymentLabelingUtil {
  /**
   * Generates a user-friendly deployment image version label
   * @param deploymentVersionDto the deployment image version
   * @returns the deployment image version label
   */
  static generateImageVersionLabel(
    deploymentVersionDto: DeploymentVersionDto,
  ): DeploymentVersionLabelDto {
    return DEPLOYMENT_VERSION_LABEL_DTO_MAP[deploymentVersionDto];
  }

  /**
   * Generates a user-friendly deployment image type label
   * @param deploymentTypeDto the deployment image type
   * @returns the deployment image type label
   */
  static generateImageTypeLabel(
    deploymentTypeDto: DeploymentTypeDto,
  ): DeploymentTypeLabelDto {
    return DEPLOYMENT_TYPE_LABEL_DTO_MAP[deploymentTypeDto];
  }

  /**
   * Generates a user-friendly deployment scaling method label
   * @param deploymentScalingMethodDto the deployment scaling method
   * @returns the deployment scaling method label
   */
  static generateScalingMethodLabel(
    deploymentScalingMethodDto: DeploymentScalingMethodDto,
  ): DeploymentScalingMethodLabelDto {
    return DEPLOYMENT_SCALING_METHOD_LABEL_DTO_MAP[deploymentScalingMethodDto];
  }

  /**
   * Generates a user-friendly deployment status label
   * @param deploymentStatusDto the deployment status
   * @returns the deployment status label
   */
  static generateStatusLabel(
    deploymentStatusDto: DeploymentStatusDto,
  ): DeploymentStatusLabelDto {
    return DEPLOYMENT_STATUS_LABEL_DTO_MAP[deploymentStatusDto];
  }
}
