import {
  deploymentImages,
  DeploymentImageDto,
} from '../dto/deployments/deployment.dto';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

/**
 * Validates the given deployment image
 */
@ValidatorConstraint({ name: 'isValidDeploymentImage', async: false })
export class IsValidDeploymentImage implements ValidatorConstraintInterface {
  validate(image: DeploymentImageDto): boolean {
    return (
      !!image &&
      !!image.type &&
      !!image.version &&
      deploymentImages.findIndex(
        (i: DeploymentImageDto) =>
          i.type === image.type && i.version === image.version,
      ) !== -1
    );
  }

  defaultMessage() {
    return 'image is not one of the allowed deployment images';
  }
}
