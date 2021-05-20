"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentDto = exports.CreateDeploymentPropertiesDto = exports.CreateDeploymentResourcesDto = exports.CreateDeploymentImageDto = void 0;
const is_valid_deployment_image_validator_1 = require("./../../validators/is-valid-deployment-image.validator");
const deployment_dto_1 = require("./deployment.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateDeploymentImageDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(deployment_dto_1.DeploymentTypeDto)
], CreateDeploymentImageDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty()
], CreateDeploymentImageDto.prototype, "version", void 0);
exports.CreateDeploymentImageDto = CreateDeploymentImageDto;
// tslint:disable-next-line: max-classes-per-file
class CreateDeploymentResourcesDto {
}
__decorate([
    class_validator_1.Min(1),
    class_validator_1.IsInt()
], CreateDeploymentResourcesDto.prototype, "cpuCount", void 0);
__decorate([
    class_validator_1.Min(2),
    class_validator_1.IsInt()
], CreateDeploymentResourcesDto.prototype, "memoryCount", void 0);
__decorate([
    class_validator_1.Min(8),
    class_validator_1.IsInt(),
    class_validator_1.IsOptional()
], CreateDeploymentResourcesDto.prototype, "storageCount", void 0);
exports.CreateDeploymentResourcesDto = CreateDeploymentResourcesDto;
// tslint:disable-next-line: max-classes-per-file
class CreateDeploymentPropertiesDto {
}
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional()
], CreateDeploymentPropertiesDto.prototype, "isFavorite", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CreateDeploymentImageDto),
    class_validator_1.Validate(is_valid_deployment_image_validator_1.IsValidDeploymentImage)
], CreateDeploymentPropertiesDto.prototype, "image", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CreateDeploymentResourcesDto)
], CreateDeploymentPropertiesDto.prototype, "resources", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(8)
], CreateDeploymentPropertiesDto.prototype, "sudoPassword", void 0);
exports.CreateDeploymentPropertiesDto = CreateDeploymentPropertiesDto;
// tslint:disable-next-line: max-classes-per-file
class CreateDeploymentDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(4)
], CreateDeploymentDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CreateDeploymentPropertiesDto)
], CreateDeploymentDto.prototype, "properties", void 0);
exports.CreateDeploymentDto = CreateDeploymentDto;
