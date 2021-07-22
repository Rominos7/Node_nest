import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Response } from "@nestjs/common";
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";

export interface Response<T> {
    data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        
        return next
        .handle()
        .pipe(
            map(data => {
                console.log(data, 'RESPONSE');
                return data;
            })
      );    
    }
}
