import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MetricsDto {
  @Expose()
  @ApiProperty({ required: false })
  readonly cpu?: number;

  @Expose()
  @ApiProperty({ required: false })
  readonly memory?: number;

  @Expose()
  @ApiProperty({ required: false })
  readonly storage?: number;

  constructor(obj: MetricsDto) {
    Object.assign(this, obj);
  }
}
