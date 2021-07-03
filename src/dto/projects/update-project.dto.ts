import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends CreateProjectDto {
  constructor(obj: UpdateProjectDto) {
    super(obj);
  }
}
