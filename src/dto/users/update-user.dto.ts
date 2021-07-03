import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ minLength: 4 })
  readonly fullName!: string;

  constructor(obj: UpdateUserDto) {
    Object.assign(this, obj);
  }
}

// tslint:disable-next-line: max-classes-per-file
export class AdminUpdateUserDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({ minLength: 4, required: false })
  readonly fullName?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ minLength: 8, required: false })
  readonly password?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly isEnabled?: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  readonly isVerified?: boolean;

  constructor(obj: AdminUpdateUserDto) {
    Object.assign(this, obj);
  }
}
