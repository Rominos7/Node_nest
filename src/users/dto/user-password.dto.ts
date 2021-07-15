import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserPasswordDto {
    @IsNotEmpty()
    @IsString()
    @Type((value) => () => String(value))
    password: string;
  }