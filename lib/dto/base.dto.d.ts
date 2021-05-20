/**
 * A DTO with the id
 */
declare class IdDto {
    readonly id: string;
}
/**
 * A DTO with the id, createdAt and updatedAt fields
 */
declare class IdWithTimestampDto implements IdDto {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
/**
 * A DTO that represents the server response when an exception is
 * thrown
 */
declare class ExceptionDto {
    statusCode: number;
    message: string | string[];
    error: string;
}
export { IdDto, IdWithTimestampDto, ExceptionDto };
