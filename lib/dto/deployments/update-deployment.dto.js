"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentDto = exports.UpdateDeploymentPropertiesDto = exports.UpdateDeploymentResourcesDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateDeploymentResourcesDto {
}
__decorate([
    class_validator_1.Min(1),
    class_validator_1.IsInt(),
    class_validator_1.IsOptional()
], UpdateDeploymentResourcesDto.prototype, "cpuCount", void 0);
__decorate([
    class_validator_1.Min(2),
    class_validator_1.IsInt(),
    class_validator_1.IsOptional()
], UpdateDeploymentResourcesDto.prototype, "memoryCount", void 0);
exports.UpdateDeploymentResourcesDto = UpdateDeploymentResourcesDto;
// tslint:disable-next-line: max-classes-per-file
class UpdateDeploymentPropertiesDto {
}
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional()
], UpdateDeploymentPropertiesDto.prototype, "isFavorite", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UpdateDeploymentResourcesDto)
], UpdateDeploymentPropertiesDto.prototype, "resources", void 0);
exports.UpdateDeploymentPropertiesDto = UpdateDeploymentPropertiesDto;
// tslint:disable-next-line: max-classes-per-file
class UpdateDeploymentDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(4),
    class_validator_1.IsOptional()
], UpdateDeploymentDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UpdateDeploymentPropertiesDto)
], UpdateDeploymentDto.prototype, "properties", void 0);
exports.UpdateDeploymentDto = UpdateDeploymentDto;
