import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Document } from './models/doc-model';

@Injectable({
    providedIn: 'root',
})
export class DocsApiService {
    constructor(private http: HttpClient) {}

    getDocuments() {
        return this.http.get('https://frontend-test.signaturit.com');
    }

    createDocument(title: string, text: string, date?: string, image?: string) {
        return this.http.post('https://frontend-test.signaturit.com', {});
    }

    deleteDocument(id: string) {
        return this.http.delete('https://frontend-test.signaturit.com', {});
    }
}
