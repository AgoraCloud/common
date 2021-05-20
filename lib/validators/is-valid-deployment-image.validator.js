"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidDeploymentImage = void 0;
const deployment_dto_1 = require("../dto/deployments/deployment.dto");
const class_validator_1 = require("class-validator");
/**
 * Validates the given deployment image
 */
let IsValidDeploymentImage = class IsValidDeploymentImage {
    validate(image) {
        return (!!image &&
            !!image.type &&
            !!image.version &&
            deployment_dto_1.deploymentImages.findIndex((i) => i.type === image.type && i.version === image.version) !== -1);
    }
    defaultMessage() {
        return 'image is not one of the allowed deployment images';
    }
};
IsValidDeploymentImage = __decorate([
    class_validator_1.ValidatorConstraint({ name: 'isValidDeploymentImage', async: false })
], IsValidDeploymentImage);
exports.IsValidDeploymentImage = IsValidDeploymentImage;
