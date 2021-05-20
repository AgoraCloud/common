"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectLaneDto = void 0;
const user_dto_1 = require("./../../users/user.dto");
const project_dto_1 = require("./../project.dto");
const class_transformer_1 = require("class-transformer");
const base_dto_1 = require("../../base.dto");
const workspaces_1 = require("../../workspaces");
let ProjectLaneDto = class ProjectLaneDto extends base_dto_1.IdWithTimestampDto {
};
__decorate([
    class_transformer_1.Expose()
], ProjectLaneDto.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => user_dto_1.UserDto)
], ProjectLaneDto.prototype, "user", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => workspaces_1.WorkspaceDto)
], ProjectLaneDto.prototype, "workspace", void 0);
__decorate([
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => project_dto_1.ProjectDto)
], ProjectLaneDto.prototype, "project", void 0);
ProjectLaneDto = __decorate([
    class_transformer_1.Exclude()
], ProjectLaneDto);
exports.ProjectLaneDto = ProjectLaneDto;
