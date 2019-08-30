import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocsApiService } from 'src/app/core/docs-api.service';
import { Document } from 'src/app/core/models/doc-model';
import { Subscription } from 'rxjs/internal/Subscription';
import { DocumentsService } from 'src/app/services/documents.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
    public documentsForm: FormGroup;
    public documents: any;
    public subscription: Subscription;
    public errorText: string;
    public actualPage = 1;
    public docType: string;

    constructor(
        private formB: FormBuilder,
        private docService: DocsApiService,
        private documentsService: DocumentsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.documentsForm = this.formB.group(
            {
                title: ['', [Validators.required]],
                text: ['', Validators.required],
                date: [''],
                imagePath: [''],
            },
            {
                validator: formControl => {
                    const date = formControl.controls.date;
                    const imagePath = formControl.controls.imagePath;
                    if (imagePath.value.length > 0) {
                        if (date.value.length === 0) {
                            return { invalid: true };
                        }
                    }
                },
            }
        );
        this.getAllDocuments();
    }

    // Get All Documents
    getAllDocuments(): void {
        // this.subscription = this.docService.documentsChanges.subscribe(
        //     (docs: any) => {
        //         this.documents = docs;
        //     }
        // );
        this.documents = this.documentsService.getDocuments();
    }
    // Add new document
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
        const token = environment.token;
        const newDoc = new Document(
            title,
            text,
            documentType,
            date,
            imagePlaceholder,
            token
        );
        console.log('newDoc');
        console.log(newDoc);
        this.documentsService.addDocument(newDoc);
    }
}
