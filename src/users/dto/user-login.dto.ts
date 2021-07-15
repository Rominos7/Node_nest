import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
    @IsNotEmpty()
    @IsString()
    @Type((value) => () => String(value))
    name: string;
  }