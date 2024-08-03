// src/modules/jokes/jokes.dto.ts

import { IsString, IsOptional } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  readonly content: string;

  @IsString()
  readonly type: string;
}

export class UpdateJokeDto {
  @IsString()
  @IsOptional()
  readonly content?: string;

  @IsString()
  @IsOptional()
  readonly type?: string;
}
