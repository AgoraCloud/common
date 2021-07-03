import { CreateShortcutDto } from './create-shortcut.dto';

export class UpdateShortcutDto extends CreateShortcutDto {
  constructor(obj: UpdateShortcutDto) {
    super(obj);
  }
}
