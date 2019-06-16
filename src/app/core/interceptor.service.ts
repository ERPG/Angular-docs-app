// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpInterceptor,
//     HttpHeaders,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { DocsApiService } from 'src/app/core/docs-api.service';

// @Injectable({
//     providedIn: 'root',
// })
// export class InterceptorService implements HttpInterceptor {
//     constructor(private docService: DocsApiService) {}

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
//         // add authorization header
//         request = request.clone({
//             setHeaders: {
//                 Authorization: `Bearer fake-jwt-token`,
//             },
//         });
//         return next.handle(request);
//     }
// }
