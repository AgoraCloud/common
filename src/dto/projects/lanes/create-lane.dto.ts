import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProjectLaneDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly name!: string;

  constructor(partial: Partial<CreateProjectLaneDto>) {
    Object.assign(this, partial);
  }
}
