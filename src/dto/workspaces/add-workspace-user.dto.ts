import { IsEmail } from 'class-validator';

export class AddWorkspaceUserDto {
  @IsEmail()
  readonly email!: string;

  constructor(partial: Partial<AddWorkspaceUserDto>) {
    Object.assign(this, partial);
  }
}
