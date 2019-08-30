import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Document } from '../../core/models/doc-model';
import { DocsApiService } from 'src/app/core/docs-api.service';
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faCalendar,
} from '@fortawesome/free-regular-svg-icons';
import { ModalService } from './../../services/modal.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
    public id: number;
    public documents: any;
    public document: any;
    public faIcon = faCalendar;
    public leftIcon = faArrowAltCircleLeft;
    public rightIcon = faArrowAltCircleRight;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private docService: DocsApiService,
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.getDocumentDetail();
        this.getDocuments();
    }
    // Get document Detail
    getDocumentDetail() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.document = this.docService.getDocumentById(this.id);
        });
    }
    // Get all Documents
    getDocuments() {
        this.documents = this.docService.getDocuments();
    }
    // Delete a Document
    deleteDocument(id: number) {
        // this.docService.deleteDocument(this.id);
        // this.router.navigate(['']);
    }
    // Open confirmation modal
    openModal(id: string): void {
        this.modalService.open(id);
    }
    // Close confirmation modal
    closeModal(id: string): void {
        this.modalService.close(id);
    }
    // Unsubscribe on destroy
    ngOnDestroy() {
        // this.route.params.subscribe((params: Params) => {
        //     params.unsubscribe();
        // });
    }
}