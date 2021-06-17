import { CreateWikiPageDto } from './create-page.dto';

export class UpdateWikiPageDto extends CreateWikiPageDto {
  constructor(partial: Partial<UpdateWikiPageDto>) {
    super(partial);
  }
}
