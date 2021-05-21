import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @IsOptional()
  readonly name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @IsOptional()
  readonly description?: string;

  constructor(partial: Partial<UpdateProjectDto>) {
    Object.assign(this, partial);
  }
}
