import { CreateWikiSectionDto } from './create-section.dto';

export class UpdateWikiSectionDto extends CreateWikiSectionDto {
  constructor(obj: UpdateWikiSectionDto) {
    super(obj);
  }
}
