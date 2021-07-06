import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { EntityNotFoundError } from 'typeorm';
import { TasksRepostiory } from './tasks.repostiory';


@Injectable()
export class RequestTasksIDGuard implements CanActivate {
  constructor(
    @InjectRepository(TasksRepostiory)
    private readonly tasksRepostiory: TasksRepostiory,
  ) {}
  
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const qetRequest = context.switchToHttp().getRequest();
    const id = qetRequest.params.id;

    // as I get it next line of code will return request field or false it field not found 
    try {
      await this.tasksRepostiory.findOneOrFail(id);

      return true;
    } catch (err) {
      if (err instanceof EntityNotFoundError) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This ID is not present in DB',
        }, HttpStatus.FORBIDDEN);
      }
      
      throw err;
    }
  }
}

