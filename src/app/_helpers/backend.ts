// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpResponse,
//     HttpHandler,
//     HttpEvent,
//     HttpInterceptor,
//     HTTP_INTERCEPTORS,
// } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// import { Document } from 'src/app/core/models/doc-model';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// @Injectable()
// export class BackendInterceptor implements HttpInterceptor {
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
//         const documents: Document[] = [
//         //     new Document(
//         //         'Main title',
//         //         'this is simply test',
//         //         '12/12/1986',
//         //         'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1493659062/tangy-coleslaw-bbq.jpg?itok=3T8GFBc_'
//         //     ),
//         //     new Document(
//         //         'Main title',
//         //         'how to make a salmon',
//         //         '12/12/1986',
//         //         'http://images.media-allrecipes.com/images/61481.jpg'
//         //     ),
//         //     new Document(
//         //         'Chicken Soup',
//         //         'make the chicken and prepare the soup',
//         //         '12/12/1986',
//         //         'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg'
//         //     ),
//         // ];
//         // const documentsSubject = new BehaviorSubject<Document[]>(documents);

//         const authHeader = request.headers.get('Authorization');
//         console.log('authHeader', authHeader);
//         // Api call Simulation
//         return (
//             of(null)
//                 .pipe(
//                     mergeMap(() => {
//                         // Requests
//                         if (
//                             request.url.endsWith('/add') &&
//                             request.method === 'POST'
//                         ) {
//                             const document = request.body;
//                             documents.push(document);
//                             documentsSubject.next(documents.slice());

//                             return ok({ documentsSubject });
//                         } else if (
//                             request.url.endsWith('/all') &&
//                             request.method === 'GET'
//                         ) {
//                             console.log('On request');
//                             documentsSubject.asObservable().subscribe(data => {
//                                 console.log('On observable');
//                                 console.log(data);
//                                 return ok({ data });
//                             });
//                         } else if (
//                             request.url.endsWith('/delete') &&
//                             request.method === 'POST'
//                         ) {
//                             const docs = documentsSubject
//                                 .asObservable()
//                                 .subscribe(data => data);
//                             return ok({});
//                         }
//                         // pass through any requests not handled above
//                         return next.handle(request);
//                     })
//                 )
//                 // call materialize and dematerialize to ensure delay even if an error is thrown
//                 .pipe(materialize())
//                 .pipe(delay(500))
//                 .pipe(dematerialize())
//         );

//         // private helper functions

//         function ok(body) {
//             return of(new HttpResponse({ status: 200, body }));
//         }

//         function unauthorised() {
//             return throwError({
//                 status: 401,
//                 error: { message: 'Unauthorised' },
//             });
//         }

//         function error(message) {
//             return throwError({ status: 400, error: { message } });
//         }
//     }
// }

// export let BackendProvider = {
//     // use fake backend
//     provide: HTTP_INTERCEPTORS,
//     useClass: BackendInterceptor,
//     multi: true,
// };
