import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class AddWorkspaceUserDto {
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  readonly id!: string;

  constructor(partial: Partial<AddWorkspaceUserDto>) {
    Object.assign(this, partial);
  }
}
