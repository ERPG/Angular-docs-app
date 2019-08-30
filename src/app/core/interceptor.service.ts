import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpHeaders,
} from '@angular/common/http';
import { DocsApiService } from 'src/app/core/docs-api.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    private token = '3a11400c-3101-494f-8cd5-c6dfb4fe4025';
    constructor(private docService: DocsApiService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    'content-type': 'application/json',
                },
                setParams: {
                    token: this.token,
                },
            });

            return next.handle(request);
        } else {
            return next.handle(request);
        }
    }

    async getApiKey(): Promise<any> | undefined {
        const promise = await this.docService.getPrivateKey();
        return promise;
    }
}
