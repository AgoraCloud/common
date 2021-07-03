import { CreateProjectLaneDto } from './create-lane.dto';

export class UpdateProjectLaneDto extends CreateProjectLaneDto {
  constructor(obj: UpdateProjectLaneDto) {
    super(obj);
  }
}
