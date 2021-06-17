import { CreateWikiSectionDto } from './create-section.dto';

export class UpdateWikiSectionDto extends CreateWikiSectionDto {
  constructor(partial: Partial<UpdateWikiSectionDto>) {
    super(partial);
  }
}
