"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentDto = exports.DeploymentPropertiesDto = exports.DeploymentImageDto = exports.DeploymentResourcesDto = exports.deploymentImages = exports.DeploymentTypeDto = exports.DeploymentStatusDto = void 0;
const user_dto_1 = require("./../users/user.dto");
const class_transformer_1 = require("class-transformer");
const workspaces_1 = require("../workspaces");
const base_dto_1 = require("../base.dto");
var DeploymentStatusDto;
(function (DeploymentStatusDto) {
    DeploymentStatusDto["Pending"] = "PENDING";
    DeploymentStatusDto["Creating"] = "CREATING";
    DeploymentStatusDto["Running"] = "RUNNING";
    DeploymentStatusDto["Updating"] = "UPDATING";
    DeploymentStatusDto["Deleting"] = "DELETING";
    DeploymentStatusDto["Failed"] = "FAILED";
    DeploymentStatusDto["Unknown"] = "UNKNOWN";
})(DeploymentStatusDto = exports.DeploymentStatusDto || (exports.DeploymentStatusDto = {}));
var DeploymentTypeDto;
(function (DeploymentTypeDto) {
    DeploymentTypeDto["VSCode"] = "VSCODE";
})(DeploymentTypeDto = exports.DeploymentTypeDto || (exports.DeploymentTypeDto = {}));
exports.deploymentImages = [
    // VSCode Deployments
    { type: DeploymentTypeDto.VSCode, version: '3.9.3' },
    { type: DeploymentTypeDto.VSCode, version: '3.9.2' },
    { type: DeploymentTypeDto.VSCode, version: '3.9.1' },
    { type: DeploymentTypeDto.VSCode, version: '3.9.0' },
];
let DeploymentResourcesDto = class DeploymentResourcesDto {
};
__decorate([
    class_transformer_1.Expose()
], DeploymentResourcesDto.prototype, "cpuCount", void 0);
__decorate([
    class_transformer_1.Expose()
], DeploymentResourcesDto.prototype, "memoryCount", void 0);
__decorate([
    class_transformer_1.Expose()
], DeploymentResourcesDto.prototype, "storageCount", void 0);
DeploymentResourcesDto = __decorate([
    class_transformer_1.Exclude()
], DeploymentResourcesDto);
exports.DeploymentResourcesDto = DeploymentResourcesDto;
// tslint:disable-next-line: max-classes-per-file
let DeploymentImageDto = class DeploymentImageDto {
};
__decorate([
    class_transformer_1.Expose()
], DeploymentImageDto.prototype, "type", void 0);
__decorate([
    class_transformer_1.Expose()
], DeploymentImageDto.prototype, "version", void 0);
DeploymentImageDto = __decorate([
    class_transformer_1.Exclude()
], DeploymentImageDto);
exports.DeploymentImageDto = DeploymentImageDto;
// tslint:disable-next-line: max-classes-per-file
let DeploymentPropertiesDto = class DeploymentPropertiesDto {
};
__decorate([
    class_transformer_1.Expose()
], DeploymentPropertiesDto.prototype, "isFavorite", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => DeploymentImageDto)
], DeploymentPropertiesDto.prototype, "image", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => DeploymentResourcesDto)
], DeploymentPropertiesDto.prototype, "resources", void 0);
DeploymentPropertiesDto = __decorate([
    class_transformer_1.Exclude()
], DeploymentPropertiesDto);
exports.DeploymentPropertiesDto = DeploymentPropertiesDto;
// tslint:disable-next-line: max-classes-per-file
let DeploymentDto = class DeploymentDto extends base_dto_1.IdWithTimestampDto {
};
__decorate([
    class_transformer_1.Expose()
], DeploymentDto.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose()
], DeploymentDto.prototype, "status", void 0);
__decorate([
    class_transformer_1.Expose()
], DeploymentDto.prototype, "failureReason", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => DeploymentPropertiesDto)
], DeploymentDto.prototype, "properties", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => workspaces_1.WorkspaceDto)
], DeploymentDto.prototype, "workspace", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => user_dto_1.UserDto)
], DeploymentDto.prototype, "user", void 0);
DeploymentDto = __decorate([
    class_transformer_1.Exclude()
], DeploymentDto);
exports.DeploymentDto = DeploymentDto;
