import { IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateShortcutDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  readonly title!: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl({ protocols: ['http', 'https'] })
  readonly link!: string;

  constructor(partial: Partial<CreateShortcutDto>) {
    Object.assign(this, partial);
  }
}
