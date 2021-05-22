import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

/**
 * A DTO with the id
 */
@Exclude()
class IdDto {
  @Expose({ name: '_id' })
  readonly id!: string;

  constructor(partial: Partial<IdDto>) {
    Object.assign(this, partial);
  }
}

/**
 * A DTO with the id, createdAt and updatedAt fields
 */
// tslint:disable-next-line: max-classes-per-file
@Exclude()
class IdWithTimestampDto implements IdDto {
  @Expose({ name: '_id' })
  readonly id!: string;

  @Expose()
  readonly createdAt!: Date;

  @Expose()
  readonly updatedAt!: Date;

  constructor(partial: Partial<IdWithTimestampDto>) {
    Object.assign(this, partial);
  }
}

/**
 * A DTO that represents the server response when an exception is
 * thrown
 */
// tslint:disable-next-line: max-classes-per-file
@Exclude()
class ExceptionDto {
  @Expose()
  statusCode!: number;

  @Expose()
  @ApiProperty({
    oneOf: [
      { type: 'string' },
      {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    ],
  })
  message!: string | string[];

  @Expose()
  error!: string;

  constructor(partial: Partial<ExceptionDto>) {
    Object.assign(this, partial);
  }
}

export { IdDto, IdWithTimestampDto, ExceptionDto };
