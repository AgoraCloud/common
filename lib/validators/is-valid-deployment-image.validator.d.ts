import { DeploymentImageDto } from '../dto/deployments/deployment.dto';
import { ValidatorConstraintInterface } from 'class-validator';
/**
 * Validates the given deployment image
 */
export declare class IsValidDeploymentImage implements ValidatorConstraintInterface {
    validate(image: DeploymentImageDto): boolean;
    defaultMessage(): string;
}
