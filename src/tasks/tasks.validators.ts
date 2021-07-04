import { IsNotEmpty, IsNumberString } from 'class-validator';

export type Task = {
    id: number;
    status: string;
    taskName: string;
    startDate: Date;
    finishDate: Date;
  };


export class ValidateId {
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}

export class RequestIsNotEmpty {
    @IsNotEmpty() id: number;
    @IsNotEmpty() status: string;
    @IsNotEmpty() taskName: string;
    @IsNotEmpty() startDate: Date;
    @IsNotEmpty() finishDate: Date;
}
