"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsArrayLength = void 0;
const class_validator_1 = require("class-validator");
/**
 * Checks if the given array has the specified length
 */
let IsArrayLength = class IsArrayLength {
    validate(arr, args) {
        const requiredLength = args.constraints[0];
        return arr && arr.length === requiredLength;
    }
    defaultMessage(args) {
        const requiredLength = args.constraints[0];
        return `array must be of length ${requiredLength}`;
    }
};
IsArrayLength = __decorate([
    class_validator_1.ValidatorConstraint({ name: 'isArrayLength', async: false })
], IsArrayLength);
exports.IsArrayLength = IsArrayLength;
