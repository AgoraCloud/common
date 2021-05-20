import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
/**
 * Checks if the given array has the specified length
 */
export declare class IsArrayLength implements ValidatorConstraintInterface {
    validate(arr: any[], args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
