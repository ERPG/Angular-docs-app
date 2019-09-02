import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DocsApiService } from 'src/app/core/docs-api.service';
import { Document } from 'src/app/core/models/doc-model';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {
  public documentsForm: FormGroup;
  public documents: any;
  public selectedFile: any;
  public imageUrl: any;
  public imagePlaceholder = 'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png';
  public errorText: string;
  public actualPage = 1;
  public docType: string;
  public pageSize = 3;

  constructor(private formB: FormBuilder, private docService: DocsApiService) {}

  ngOnInit() {
    this.documentsForm = this.formB.group(
      {
        title: ['', [Validators.required]],
        text: ['', Validators.required],
        date: [''],
        imagePath: ['']
      },
      {
        validator: formControl => {
          const date = formControl.controls.date;
          const imagePath = formControl.controls.imagePath;
          if (imagePath && imagePath.value && imagePath.value.length > 0) {
            if (date.value.length === 0) {
              return { invalid: true };
            }
          }
        }
      }
    );
    this.getAllDocuments();
  }

  // Get All Documents
  getAllDocuments(): void {
    this.docService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }
  // Add new document
  addDocument(): void {
    this.errorText = '';
    const { title, text, date, imagePath } = this.documentsForm.value;
    const documentType = this.setDocumentType(date, imagePath);
    const image = this.imageUrl ? this.imageUrl : this.imagePlaceholder;
    if (documentType) {
      const newDoc = new Document(title, text, documentType, date, image);
      this.docService.createDocument(newDoc).subscribe(
        data => {
          this.onClear();
          this.imageUrl = '';
          this.getAllDocuments();
          console.log('SUCCESS');
        },
        error => {
          console.log('ERROR');
          this.errorText = 'Something went very worg, please try again!';
        }
      );
    }
  }

  setDocumentType(date: string, imagePath: string): string {
    let documentType: string;
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
    return documentType;
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onClear() {
    this.documentsForm.reset();
  }
}
