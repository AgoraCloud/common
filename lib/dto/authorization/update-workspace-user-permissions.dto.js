"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkspaceUserPermissionsDto = void 0;
const is_array_length_validator_1 = require("../../validators/is-array-length.validator");
const permission_dto_1 = require("./permission.dto");
const class_validator_1 = require("class-validator");
class UpdateWorkspaceUserPermissionsDto {
}
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsNotEmpty({ each: true }),
    class_validator_1.Validate(is_array_length_validator_1.IsArrayLength, [1], {
        message: 'a user must have one role only',
    }),
    class_validator_1.IsIn([permission_dto_1.RoleDto.User, permission_dto_1.RoleDto.WorkspaceAdmin], { each: true })
], UpdateWorkspaceUserPermissionsDto.prototype, "roles", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsNotEmpty({ each: true }),
    class_validator_1.IsIn(permission_dto_1.InWorkspaceActions, { each: true })
], UpdateWorkspaceUserPermissionsDto.prototype, "permissions", void 0);
exports.UpdateWorkspaceUserPermissionsDto = UpdateWorkspaceUserPermissionsDto;
