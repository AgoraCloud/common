import { CreateShortcutDto } from './create-shortcut.dto';

export class UpdateShortcutDto extends CreateShortcutDto {
  constructor(partial: Partial<UpdateShortcutDto>) {
    super(partial);
  }
}
