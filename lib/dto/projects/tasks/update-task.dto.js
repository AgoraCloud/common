"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectTaskDto = exports.UpdateProjectTaskLaneDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateProjectTaskLaneDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsMongoId(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsOptional()
], UpdateProjectTaskLaneDto.prototype, "id", void 0);
exports.UpdateProjectTaskLaneDto = UpdateProjectTaskLaneDto;
// tslint:disable-next-line: max-classes-per-file
class UpdateProjectTaskDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(1),
    class_validator_1.IsOptional()
], UpdateProjectTaskDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(1),
    class_validator_1.IsOptional()
], UpdateProjectTaskDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UpdateProjectTaskLaneDto)
], UpdateProjectTaskDto.prototype, "lane", void 0);
exports.UpdateProjectTaskDto = UpdateProjectTaskDto;
