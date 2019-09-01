import { Injectable } from '@angular/core';
import { DocsApiService } from '../core/docs-api.service';
import { Document } from '../core/models/doc-model';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  constructor(private apiService: DocsApiService) {}

  getDocuments() {
    return this.apiService.getDocuments().subscribe(
      data => {
        return data;
      },
      error => {
        console.log('ERROR');
      }
    );
  }

  addDocument(doc: Document) {
    return this.apiService.createDocument(doc).subscribe(
      data => {
        console.log('SUCCESS');
      },
      error => {
        console.log('ERROR');
      }
    );
  }
}
