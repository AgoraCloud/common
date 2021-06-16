import { CreateShortcutDto } from './create-shortcut.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateShortcutDto extends PartialType(CreateShortcutDto) {
  constructor(partial: Partial<UpdateShortcutDto>) {
    super(partial);
  }
}
