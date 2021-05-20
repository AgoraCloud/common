"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceDto = exports.WorkspacePropertiesDto = exports.WorkspaceResourcesDto = void 0;
const user_dto_1 = require("./../users/user.dto");
const class_transformer_1 = require("class-transformer");
const base_dto_1 = require("../base.dto");
let WorkspaceResourcesDto = class WorkspaceResourcesDto {
};
__decorate([
    class_transformer_1.Expose()
], WorkspaceResourcesDto.prototype, "cpuCount", void 0);
__decorate([
    class_transformer_1.Expose()
], WorkspaceResourcesDto.prototype, "memoryCount", void 0);
__decorate([
    class_transformer_1.Expose()
], WorkspaceResourcesDto.prototype, "storageCount", void 0);
WorkspaceResourcesDto = __decorate([
    class_transformer_1.Exclude()
], WorkspaceResourcesDto);
exports.WorkspaceResourcesDto = WorkspaceResourcesDto;
// tslint:disable-next-line: max-classes-per-file
let WorkspacePropertiesDto = class WorkspacePropertiesDto {
};
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => WorkspaceResourcesDto)
], WorkspacePropertiesDto.prototype, "resources", void 0);
WorkspacePropertiesDto = __decorate([
    class_transformer_1.Exclude()
], WorkspacePropertiesDto);
exports.WorkspacePropertiesDto = WorkspacePropertiesDto;
// tslint:disable-next-line: max-classes-per-file
let WorkspaceDto = class WorkspaceDto extends base_dto_1.IdWithTimestampDto {
};
__decorate([
    class_transformer_1.Expose()
], WorkspaceDto.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => WorkspacePropertiesDto)
], WorkspaceDto.prototype, "properties", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => user_dto_1.UserDto)
], WorkspaceDto.prototype, "users", void 0);
WorkspaceDto = __decorate([
    class_transformer_1.Exclude()
], WorkspaceDto);
exports.WorkspaceDto = WorkspaceDto;
