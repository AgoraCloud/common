import { PartialType } from '@nestjs/mapped-types';
import { CreateWikiSectionDto } from './create-section.dto';

export class UpdateWikiSectionDto extends PartialType(CreateWikiSectionDto) {
  constructor(partial: Partial<UpdateWikiSectionDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
