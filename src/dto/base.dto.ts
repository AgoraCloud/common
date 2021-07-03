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

  constructor(obj: IdDto) {
    Object.assign(this, obj);
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

  constructor(obj: IdWithTimestampDto) {
    Object.assign(this, obj);
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

  constructor(obj: ExceptionDto) {
    Object.assign(this, obj);
  }
}

export { IdDto, IdWithTimestampDto, ExceptionDto };
