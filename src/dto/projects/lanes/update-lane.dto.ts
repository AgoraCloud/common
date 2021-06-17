import { CreateProjectLaneDto } from './create-lane.dto';

export class UpdateProjectLaneDto extends CreateProjectLaneDto {
  constructor(partial: Partial<UpdateProjectLaneDto>) {
    super(partial);
  }
}
