import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../base.dto';

@Exclude()
export class UserDto extends IdDto {
  @Expose()
  @ApiProperty()
  readonly fullName!: string;

  @Expose()
  @ApiProperty()
  readonly email!: string;

  constructor(partial: Partial<UserDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}

// tslint:disable-next-line: max-classes-per-file
@Exclude()
export class AdminUserDto extends UserDto {
  @Expose()
  @ApiProperty()
  readonly isEnabled!: boolean;

  @Expose()
  @ApiProperty()
  readonly isVerified!: boolean;

  constructor(partial: Partial<AdminUserDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
