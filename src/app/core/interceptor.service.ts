import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpHeaders,
} from '@angular/common/http';
import { DocsApiService } from 'src/app/core/docs-api.service';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    private token = '161da8d7-b7b8-4c84-858a-6b216577b4c3';
    constructor(private docService: DocsApiService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): any {
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
