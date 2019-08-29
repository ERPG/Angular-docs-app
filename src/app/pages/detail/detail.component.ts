import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Document } from '../../core/models/doc-model';
import { DocsApiService } from 'src/app/core/docs-api.service';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faCalendar,
} from '@fortawesome/free-regular-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    public id: number;
    public documents: any;
    public document: Document;
    public faIcon = faCalendar;
    public leftIcon = faArrowAltCircleLeft;
    public rightIcon = faArrowAltCircleRight;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private docService: DocsApiService
    ) {}

    ngOnInit() {
        this.getDocumentDetail();
        this.getDocuments();
    }

    getDocumentDetail() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.document = this.docService.getDocumentById(this.id);
        });
    }

    getDocuments() {
        this.documents = this.docService.getDocuments();
    }

    deleteDocument() {
        // this.docService.deleteDocument(this.id);
        // this.router.navigate(['']);
    }
}
