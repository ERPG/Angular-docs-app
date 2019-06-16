import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocsApiService } from 'src/app/core/docs-api.service';
import { Observable } from 'rxjs/internal/Observable';
import { Document } from 'src/app/core/models/doc-model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit, OnDestroy {
    public documentsForm: FormGroup;
    public documents: Document[];
    public subscription: Subscription;
    public errorText: string;

    constructor(
        private formB: FormBuilder,
        private docService: DocsApiService
    ) {}

    ngOnInit() {
        this.documentsForm = this.formB.group({
            title: ['', [Validators.required]],
            text: ['', Validators.required],
            date: [''],
            imagePath: [''],
        });
        this.getAllDocuments();
        console.log(this.documentsForm);
    }

    getAllDocuments(): void {
        this.subscription = this.docService.documentsChanges.subscribe(
            (docs: any) => {
                this.documents = docs;
            }
        );
        this.documents = this.docService.getDocuments();
    }
    addDocument(): void {
        this.errorText = '';
        let documentType: string;
        const { title, text, date, imagePath } = this.documentsForm.value;
        const values = { title, text, date, imagePath };
        if (!date && !imagePath) {
            documentType = 'Simple';
        } else if (date && !imagePath) {
            documentType = 'Custom';
        } else if (date && imagePath) {
            documentType = 'Advance';
        } else if (!date && imagePath) {
            this.errorText = 'You need to set Date first!..';
            return;
        }
        const imagePlaceholder = imagePath
            ? imagePath
            : 'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png';
        const newDoc = new Document(
            title,
            text,
            documentType,
            date,
            imagePlaceholder
        );
        this.docService.createDocument(newDoc);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
