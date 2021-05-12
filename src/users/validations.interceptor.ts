import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    BadRequestException,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
      return next
        .handle()
        .pipe(
          catchError(err => throwError(
                new BadRequestException({
                    success: false,
                    msg: err.response.message
                })
            )
        
        ));
    }
  }
  