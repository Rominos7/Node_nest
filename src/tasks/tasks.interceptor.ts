import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Response } from "@nestjs/common";
import { Observable } from 'rxjs'
import { tap, map } from 'rxjs/operators';

export interface Response<T> {
    data: T;
  }

@Injectable()
export class RequestInterseptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const qetRequest = context.switchToHttp().getRequest();
        const method = qetRequest.method;
        const url = qetRequest.url;
        const params = qetRequest.params;
        const body = qetRequest.res.body;

        return next
        .handle()
        .pipe(
            tap(()=> console.log(
                `Was request \n`+
                `Method: ${method} \n`+
                `URL: ${url} \n`+
                `Params: ${JSON.stringify(params)} \n`+
                `Body: ${JSON.stringify(body)} \n`
            ))
        )
    }
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        
        const qetResponse = context.switchToHttp().getResponse();
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
