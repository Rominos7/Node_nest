import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class TasksIdDto {
    @IsNumberString()
    @IsNotEmpty()
    @Type((value) => () => Number(value))
    id: number;
  }