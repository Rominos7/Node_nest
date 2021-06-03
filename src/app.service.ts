import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Task from './database/entities/task.entity';

@Injectable()
export class AppService {  
  getHello(): string {
    return 'Hello World!';
  }
  getPizza(): string {
    return 'This is my pizza! I love it!';
  }
  getLinkGoogle(): string {
    return 'www.google.com';
  }
  postDataSendNumbers(): number[] {
    const numberArray = [1,2,3,4,5];
    return numberArray;
  }
}
