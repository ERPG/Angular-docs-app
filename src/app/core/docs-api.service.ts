import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Document } from './models/doc-model';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DocsApiService {
    constructor(private http: HttpClient) {}
    private token = environment.token;
    private apiUrl =
        'https://frontend-test.signaturit.com' +
        '/documents?token=' +
        this.token;
    documentsChanges = new Subject<Document[]>();

    // public documents: Document[] = [
    //     new Document(
    //         'Main title',
    //         'this is simply test',
    //         'Advance',
    //         '12/12/1986',
    //         'https://www.helpnetsecurity.com/wp-content/uploads/2015/12/1450275992_key-100x100.png'
    //     ),
    //     new Document(
    //         'Main title',
    //         'how to make a salmon',
    //         'Custom',
    //         '12/12/1986',
    //         'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png'
    //     ),
    //     new Document(
    //         'Chicken Soup',
    //         'make the chicken and prepare the soup',
    //         'Simple',
    //         '',
    //         'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png'
    //     ),
    //     new Document(
    //         'What is Lorem Ipsum?',
    //         'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque congue finibus lectus, dapibus sollicitudin dolor porttitor at. Integer pharetra, lectus at scelerisque vestibulum, nisi mi fermentum ipsum, sed porta sapien mauris at lorem. Nam euismod eros lacus, nec auctor turpis placerat vel. Donec vitae ultricies augue. Donec ligula odio, suscipit sed rhoncus eget, dictum vitae ex. Fusce sit amet nisi non mi placerat auctor.',
    //         'Advance',
    //         '12/12/1986',
    //         'https://www.helpnetsecurity.com/wp-content/uploads/2015/12/1450275992_key-100x100.png'
    //     ),
    //     new Document(
    //         'Why do we use it?',
    //         'Aliquam quis dictum ligula. Morbi augue purus, scelerisque vel lacinia sed, lacinia ac nisl. Phasellus ac dolor tincidunt, dignissim est at, mattis massa. Phasellus erat tellus, consectetur eu nunc sit amet, mollis euismod dui. Vestibulum at ipsum finibus, consectetur ipsum sit amet, vulputate nunc. Duis tincidunt nisl enim, ut commodo odio dapibus eu. In hac habitasse platea dictumst. Integer pulvinar nisi sem, vel ultricies quam tristique id. Vivamus nec consequat risus. Maecenas vitae nulla ac velit feugiat placerat sed condimentum augue. Fusce feugiat quis risus vitae malesuada. Etiam porttitor nulla ac eros congue, id sollicitudin leo aliquam. Proin mauris nulla, mattis sit amet auctor non, mattis non sem. Ut aliquet gravida mauris, et faucibus dui pretium semper.',
    //         'Custom',
    //         '12/12/1986',
    //         'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png'
    //     ),
    //     new Document(
    //         'Where can I get some?',
    //         'Morbi vel vestibulum lorem, nec dapibus felis. In condimentum pretium justo ut vulputate. Duis bibendum blandit semper. Aenean id lectus orci. Morbi tincidunt porta justo, non gravida odio. Sed lobortis sed neque ut consequat. Mauris nulla odio, dapibus a orci ut, porttitor fringilla mauris.',
    //         'Simple',
    //         '',
    //         'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png'
    //     ),
    // ];

    // ==== get fake documents ==== //
    // getDocuments() {
    //     return this.documents;
    // }

    getPrivateKey(): Promise<any> | undefined {
        return this.http
            .get('http://localhost:3000/private')
            .pipe(
                map(data => {
                    return data;
                }, catchError(this.handleError))
            )
            .toPromise();
    }

    getDocuments() {
        return this.http.get<Document[]>(`${this.apiUrl}&type=simple`).pipe(
            map(data => {
                return data;
            }, catchError(this.handleError))
        );
        // const simple = this.http.get<Document[]>(`${this.apiUrl}&type=simple`);
        // const custom = this.http
        //     .get<Document[]>(`${this.apiUrl}&type=custom`)
        //     .toPromise();
        // const advance = this.http
        //     .get<Document[]>(`${this.apiUrl}&type=advanced`)
        //     .toPromise();
        // const all = Promise.all([simple, custom, advance]);
        // console.log('all =>', all);
        // console.log(simple);
    }

    getDocumentsByType(documentType: string) {
        return this.http.get<Document[]>(`${this.apiUrl}&type=` + documentType);
    }

    getDocumentById(index: number) {
        // return this.documents[index];
    }

    createDocument(document: Document) {
        console.log('POST');
        console.log(document);
        return this.http
            .post(`${this.apiUrl}`, {
                document,
            })
            .pipe(
                map(data => {
                    console.log('SUCESSS');
                    return data;
                }, catchError(this.handleError))
            );
        // this.documents.push(document);
    }

    deleteDocument(documentType: string, index: number) {
        // this.documents.splice(index, 1);
        // this.documentsChanges.next(this.documents.slice());
        return this.http
            .delete('https://frontend-test.signaturit.com', {})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): string | Observable<any> {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
