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

    documentsChanges = new Subject<Document[]>();

    private documents: Document[] = [
        new Document(
            'Main title',
            'this is simply test',
            '12/12/1986',
            'http://cdn-img.health.com/sites/default/files/styles/small_16_9/public/1493659062/tangy-coleslaw-bbq.jpg?itok=3T8GFBc_'
        ),
        new Document(
            'Main title',
            'how to make a salmon',
            '12/12/1986',
            'http://images.media-allrecipes.com/images/61481.jpg'
        ),
        new Document(
            'Chicken Soup',
            'make the chicken and prepare the soup',
            '12/12/1986',
            'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg'
        ),
    ];

    getDocuments() {
        return this.documents.slice();
        // const headers = new HttpHeaders();
        // headers.set('Content-Type', 'application/json; charset=utf-8');
        // headers.set('access-control-allow-origin', '*');
        // return this.http.get('https://frontend-test.signaturit.com', {
        //     headers,
        // });
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
