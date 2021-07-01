import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class AddWorkspaceUserDto {
  @IsEmail()
  @ApiProperty()
  readonly email!: string;

  constructor(partial: Partial<AddWorkspaceUserDto>) {
    Object.assign(this, partial);
  }
}
