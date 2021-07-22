import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError } from 'typeorm';
import { UsersRepository } from './users.repository';


@Injectable()
export class SingInUserGuard implements CanActivate {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}
  
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const qetRequest = context.switchToHttp().getRequest();
    const login = qetRequest.body.login;
    
    try {
      await this.usersRepository.findOneOrFail({userLogin:login});

      return true;
    } catch (err) {
      if (err instanceof EntityNotFoundError) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This user is not present in DB',
        }, HttpStatus.FORBIDDEN);
      }
      
      throw err;
    }
  }
}
