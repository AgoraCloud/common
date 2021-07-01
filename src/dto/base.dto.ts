import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

/**
 * A DTO with the id
 */
@Exclude()
class IdDto {
  @ApiProperty()
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
  @ApiProperty()
  @Expose({ name: '_id' })
  readonly id!: string;

  @Expose()
  @ApiProperty()
  readonly createdAt!: Date;

  @Expose()
  @ApiProperty()
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
  @ApiProperty()
  statusCode!: number;

  @Expose()
  @ApiProperty({ type: () => String })
  message!: string | string[];

  @Expose()
  @ApiProperty()
  error!: string;

  constructor(partial: Partial<ExceptionDto>) {
    Object.assign(this, partial);
  }
}

export { IdDto, IdWithTimestampDto, ExceptionDto };
