"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWikiSectionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_section_dto_1 = require("./create-section.dto");
class UpdateWikiSectionDto extends mapped_types_1.PartialType(create_section_dto_1.CreateWikiSectionDto) {
}
exports.UpdateWikiSectionDto = UpdateWikiSectionDto;
