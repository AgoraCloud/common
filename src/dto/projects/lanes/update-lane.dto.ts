import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectLaneDto } from './create-lane.dto';

export class UpdateProjectLaneDto extends PartialType(CreateProjectLaneDto) {
  constructor(partial: Partial<UpdateProjectLaneDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
