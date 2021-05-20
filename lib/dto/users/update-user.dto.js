"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateUserDto = exports.UpdateUserDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(4)
], UpdateUserDto.prototype, "fullName", void 0);
exports.UpdateUserDto = UpdateUserDto;
// tslint:disable-next-line: max-classes-per-file
class AdminUpdateUserDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(4)
], AdminUpdateUserDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(8)
], AdminUpdateUserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional()
], AdminUpdateUserDto.prototype, "isEnabled", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional()
], AdminUpdateUserDto.prototype, "isVerified", void 0);
exports.AdminUpdateUserDto = AdminUpdateUserDto;
