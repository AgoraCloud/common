"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionDto = exports.IdWithTimestampDto = exports.IdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
/**
 * A DTO with the id
 */
class IdDto {
}
__decorate([
    class_transformer_1.Expose({ name: '_id' })
], IdDto.prototype, "id", void 0);
exports.IdDto = IdDto;
/**
 * A DTO with the id, createdAt and updatedAt fields
 */
// tslint:disable-next-line: max-classes-per-file
class IdWithTimestampDto {
}
__decorate([
    class_transformer_1.Expose({ name: '_id' })
], IdWithTimestampDto.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose()
], IdWithTimestampDto.prototype, "createdAt", void 0);
__decorate([
    class_transformer_1.Expose()
], IdWithTimestampDto.prototype, "updatedAt", void 0);
exports.IdWithTimestampDto = IdWithTimestampDto;
/**
 * A DTO that represents the server response when an exception is
 * thrown
 */
// tslint:disable-next-line: max-classes-per-file
class ExceptionDto {
}
__decorate([
    swagger_1.ApiProperty({ oneOf: [{ type: 'string' }, { type: '[string]' }] })
], ExceptionDto.prototype, "message", void 0);
exports.ExceptionDto = ExceptionDto;
