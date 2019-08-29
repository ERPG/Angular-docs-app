import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Document } from './models/doc-model';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DocsApiService {
    constructor(private http: HttpClient) {}

    private apiUrl = 'https://frontend-test.signaturit.com';
    documentsChanges = new Subject<Document[]>();

    public documents: Document[] = [
        new Document(
            'Main title',
            'this is simply test',
            'Advance',
            '12/12/1986',
            'https://www.helpnetsecurity.com/wp-content/uploads/2015/12/1450275992_key-100x100.png'
        ),
        new Document(
            'Main title',
            'how to make a salmon',
            'Custom',
            '12/12/1986',
            'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png'
        ),
        new Document(
            'Chicken Soup',
            'make the chicken and prepare the soup',
            'simple',
            '',
            'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png'
        ),
    ];

    // ==== get fake documents ==== //
    getDocuments() {
        return this.documents;
    }

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

    // getDocuments() {
    //     const simple = this.http
    //         .get<Document[]>(`${this.apiUrl}/documents?type=simple`)
    //         .toPromise();
    //     const custom = this.http
    //         .get<Document[]>(`${this.apiUrl}/documents?type=custom`)
    //         .toPromise();
    //     const advance = this.http
    //         .get<Document[]>(`${this.apiUrl}/documents?type=advance`)
    //         .toPromise();
    //     const all = Promise.all([simple, custom, advance]);
    //     console.log('all =>', all);
    //     console.log(simple);
    //     return all;
    // }

    getDocumentsByType(documentType: string) {
        return this.http.get<Document[]>(
            `${this.apiUrl}/documents?type=` + documentType
        );
    }

    getDocumentById(index: number) {
        return this.documents[index];
    }

    createDocument(document: Document) {
        // return this.http
        //     .post('https://frontend-test.signaturit.com', {
        //         document,
        //     })
        //     .pipe(
        //         map(data => {
        //             return data;
        //         }, catchError(this.handleError))
        //     );
        this.documents.push(document);
    }

    deleteDocument(documentType: string, index: number) {
        // this.documents.splice(index, 1);
        // this.documentsChanges.next(this.documents.slice());
        return this.http
            .delete('https://frontend-test.signaturit.com', {})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
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
