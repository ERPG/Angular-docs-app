import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpResponse,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http';
import { Document } from './models/doc-model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root',
})
export class DocsApiService {
    constructor(private http: HttpClient) {}
    // private apiUrl = 'http://localhost:4200/api';
    documentsChanges = new Subject<Document[]>();

    private documents: Document[] = [
        new Document(
            'Main title',
            'this is simply test',
            'Advance',
            '12/12/1986',
            'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1493659062/tangy-coleslaw-bbq.jpg?itok=3T8GFBc_'
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

    getDocuments() {
        return this.documents.slice();
        // const headers = new HttpHeaders();
        // headers.set('Content-Type', 'application/json; charset=utf-8');
        // headers.set('access-control-allow-origin', '*');
        // return this.http.get<Document[]>(`${this.apiUrl}/all`);
    }

    getDocumentById(index: number) {
        return this.documents[index];
    }

    createDocument(document: Document) {
        this.documents.push(document);
        this.documentsChanges.next(this.documents.slice());
        // return this.http.post('https://frontend-test.signaturit.com', {});
    }

    deleteDocument(index: number) {
        this.documents.splice(index, 1);
        this.documentsChanges.next(this.documents.slice());
        // return this.http.delete('https://frontend-test.signaturit.com', {});
    }
}
