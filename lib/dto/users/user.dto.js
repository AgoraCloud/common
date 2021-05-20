"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserDto = exports.UserDto = void 0;
const class_transformer_1 = require("class-transformer");
const base_dto_1 = require("../base.dto");
let UserDto = class UserDto extends base_dto_1.IdDto {
};
__decorate([
    class_transformer_1.Expose()
], UserDto.prototype, "fullName", void 0);
__decorate([
    class_transformer_1.Expose()
], UserDto.prototype, "email", void 0);
UserDto = __decorate([
    class_transformer_1.Exclude()
], UserDto);
exports.UserDto = UserDto;
// tslint:disable-next-line: max-classes-per-file
let AdminUserDto = class AdminUserDto extends UserDto {
};
__decorate([
    class_transformer_1.Expose()
], AdminUserDto.prototype, "isEnabled", void 0);
__decorate([
    class_transformer_1.Expose()
], AdminUserDto.prototype, "isVerified", void 0);
AdminUserDto = __decorate([
    class_transformer_1.Exclude()
], AdminUserDto);
exports.AdminUserDto = AdminUserDto;
