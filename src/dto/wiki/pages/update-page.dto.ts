import { CreateWikiPageDto } from './create-page.dto';

export class UpdateWikiPageDto extends CreateWikiPageDto {
  constructor(obj: UpdateWikiPageDto) {
    super(obj);
  }
}
