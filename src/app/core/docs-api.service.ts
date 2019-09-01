import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Document } from './models/doc-model';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocsApiService {
  constructor(private http: HttpClient) {}
  // private apiUrl =
  //     'https://frontend-test.signaturit.com' +
  //     '/documents?token=' +
  //     this.token;
  private apiUrl = 'http://localhost:3000/api';
  documentsChanges = new Subject<Document[]>();

  getDocuments() {
    return this.http.get<Document[]>(`${this.apiUrl}/allDocuments`).pipe(
      map(data => {
        return data;
      }, catchError(this.handleError))
    );
  }

  createDocument(document: Document) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', ' application/base64');
    return this.http.post(`${this.apiUrl}/addDocument`, document, { headers }).pipe(
      map(data => {
        return data;
      }, catchError(this.handleError))
    );
  }

  deleteDocument(index: number) {
    return this.http.delete(`${this.apiUrl}/deleteDocument/${index}`, {}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): string | Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
