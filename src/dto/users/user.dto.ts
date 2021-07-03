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

  constructor(obj: UserDto) {
    super(obj);
    Object.assign(this, obj);
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

  constructor(obj: AdminUserDto) {
    super(obj);
    Object.assign(this, obj);
  }
}
