import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    BadRequestException,
  } from '@nestjs/common';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
import { StatusCreateUserDto } from './dto/status-create-user.dto';
  
  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<StatusCreateUserDto> {
        
      return next
        .handle()
        .pipe(catchError(err => throwError(
          new BadRequestException(new StatusCreateUserDto(false, err.response.message))
        )));
    }
  }
  