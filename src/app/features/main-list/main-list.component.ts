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
    }

    getAllDocuments(): void {
        this.subscription = this.docService.documentsChanges.subscribe(
            (docs: any) => {
                console.log('________');
                console.log(docs);
                this.documents = docs;
            }
        );
        this.documents = this.docService.getDocuments();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
