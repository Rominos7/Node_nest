import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { TasksRepostiory } from './tasks.repostiory';


@Injectable()
export class RequestTasksIDGuard implements CanActivate {
  constructor(
    @InjectRepository(TasksRepostiory)
    private readonly tasksRepostiory: TasksRepostiory,
  ) {}
  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const qetRequest = context.switchToHttp().getRequest();
    const id = qetRequest.params.id;
    
    // as I get it next line of code will return request field or false it field not found 
    const isIDValid = this.tasksRepostiory.findOneOrFail(id);
    
    // wanted to add some error message when we fail to find id in DB. Didn't work. How to do this right?
    if(!isIDValid) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This ID is not present in DB',
      }, HttpStatus.FORBIDDEN);
    }

    return true;
  }
}

