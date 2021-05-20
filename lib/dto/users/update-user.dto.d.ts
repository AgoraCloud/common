export declare class UpdateUserDto {
    readonly fullName: string;
}
export declare class AdminUpdateUserDto {
    readonly fullName?: string;
    readonly password?: string;
    readonly isEnabled?: boolean;
    readonly isVerified?: boolean;
}
