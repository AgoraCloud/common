import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../base.dto';

@Exclude()
export class UserDto extends IdDto {
  @Expose()
  readonly fullName!: string;

  @Expose()
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
  readonly isEnabled!: boolean;

  @Expose()
  readonly isVerified!: boolean;

  constructor(partial: Partial<AdminUserDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
