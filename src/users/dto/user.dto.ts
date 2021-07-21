import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

//TODO: Write a better DTO
export class UserDto {
    @IsNotEmpty()
    @IsString()
    login: string;
    password: string;
  }