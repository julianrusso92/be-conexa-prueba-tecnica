import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';
import { ForbiddenException } from '@nestjs/common';

export function fetchData<T>(
  httpService: HttpService,
  url: string,
): Observable<T> {
  return httpService.get(url).pipe(
    map((res) => res.data),
    catchError((e) => {
      console.log('Error occurred: ', e);
      throw new ForbiddenException('API not available');
    }),
  );
}
