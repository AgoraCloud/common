"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectLaneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lane_dto_1 = require("./create-lane.dto");
class UpdateProjectLaneDto extends mapped_types_1.PartialType(create_lane_dto_1.CreateProjectLaneDto) {
}
exports.UpdateProjectLaneDto = UpdateProjectLaneDto;
