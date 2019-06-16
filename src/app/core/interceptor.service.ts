import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocsApiService } from 'src/app/core/docs-api.service';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    constructor(private docService: DocsApiService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        // add authorization header
        request = request.clone({
            setParams: {
                token: '2b2e2250-d061-4631-9037-ff46c45cde5b',
                type: 'Simple',
            },
        });
        console.log(' === interceptor ==');
        return next.handle(request);
    }
}

// request.clone({
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:4200/',
//         Authorization: '2b2e2250-d061-4631-9037-ff46c45cde5b',
//     }),
//     setParams: {
//         token: '2b2e2250-d061-4631-9037-ff46c45cde5b',
//     },
// });
