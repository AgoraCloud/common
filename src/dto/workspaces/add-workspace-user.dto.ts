import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class AddWorkspaceUserDto {
  @IsEmail()
  @ApiProperty()
  readonly email!: string;

  constructor(obj: AddWorkspaceUserDto) {
    Object.assign(this, obj);
  }
}
