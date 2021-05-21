import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateWikiSectionDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly name!: string;

  constructor(partial: Partial<CreateWikiSectionDto>) {
    Object.assign(this, partial);
  }
}
