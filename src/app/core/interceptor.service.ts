import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
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
            setHeaders: {
                Authorization: `Bearer 2b2e2250-d061-4631-9037-ff46c45cde5b`,
            },
        });

        return next.handle(request);
    }
}
