import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Document } from './../../core/models/doc-model';
import { DocsApiService } from 'src/app/core/docs-api.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    public id: number;
    public document: Document;
    public allDocuments: Document[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private docService: DocsApiService
    ) {}

    ngOnInit() {
        this.allDocuments = this.getDocuments();
        this.getDocumentDetail();
    }

    getDocumentDetail() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.document = this.docService.getDocumentById(this.id);
        });
    }

    getDocuments() {
        return this.docService.getDocuments();
    }

    deleteDocument() {
        this.docService.deleteDocument(this.id);
        this.router.navigate(['']);
    }
}
