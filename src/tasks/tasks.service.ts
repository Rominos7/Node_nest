import { Injectable } from '@nestjs/common';
import  Tasks  from './tasks.entity';

type Task = {
    id:number;
    status:string;
    taskName: string;
    startDate: Date;
    finishDate: Date;
}

@Injectable()
export class TasksService {
    createNewLine(): Task {
        const newTask = new Tasks();
        // newTask.id = 0;
        newTask.status = 'Active';
        newTask.taskName = 'Hold my bear';
        return newTask;
    }
}