import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MetricsDto {
  @Expose()
  readonly cpu?: number;

  @Expose()
  readonly memory?: number;

  @Expose()
  readonly storage?: number;

  constructor(partial: Partial<MetricsDto>) {
    Object.assign(this, partial);
  }
}
