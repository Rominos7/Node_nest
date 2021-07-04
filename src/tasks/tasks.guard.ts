import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

// this was my work with guards. Nothing fansy. 
@Injectable()
export class TasksGuard implements CanActivate {
    canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('log', context);
    return true;
  }
}

