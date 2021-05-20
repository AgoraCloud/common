import { IdDto } from '../base.dto';
export declare class UserDto extends IdDto {
    readonly fullName: string;
    readonly email: string;
}
export declare class AdminUserDto extends UserDto {
    readonly isEnabled: boolean;
    readonly isVerified: boolean;
}
