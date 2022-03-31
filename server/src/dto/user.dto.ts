import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitizeInput } from 'src/helpers/utils.helper';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeInput(value))
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeInput(value))
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeInput(value))
  organization: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  token: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => sanitizeInput(value))
  role: string;

  @IsString()
  @IsOptional()
  new_signup: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
