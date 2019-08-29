import { Injectable } from '@angular/core';
import { DocsApiService } from '../core/docs-api.service';
import { Document } from '../core/models/doc-model';

@Injectable({
    providedIn: 'root',
})
export class DocumentsService {
    constructor(private apiService: DocsApiService) {}

    getDocuments(): Document[] {
        return this.apiService.getDocuments();
    }
}
