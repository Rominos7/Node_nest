import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators';

@Injectable()
export class GeneralInterseptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Was request');
        const qetRequest = context.switchToHttp().getRequest();
        const method = qetRequest.method;
        const url = qetRequest.url;
        const params = qetRequest.params;
        const body = qetRequest.res.body;

        return next
        .handle()
        .pipe(
            tap(()=> console.log(
                `Method: ${method} \n`+
                `URL: ${url} \n`+
                `Params: ${JSON.stringify(params)} \n`+
                `Body: ${JSON.stringify(body)} \n`
            ))
        )
    }
}