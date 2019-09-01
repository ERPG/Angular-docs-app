import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListComponent } from './main-list.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Input, Component } from '@angular/core';
import { Document } from 'src/app/core/models/doc-model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DocsApiService } from 'src/app/core/docs-api.service';

@Component({ selector: 'app-label', template: '' })
class LabelComponent {
  @Input() text: string;
}
@Component({ selector: 'app-button', template: '' })
class ButtonComponent {
  @Input() type;
  @Input() disabled;
  @Input() text;
  @Input() class;
}
@Component({ selector: 'app-input', template: '' })
class InputComponent {
  @Input() control: FormControl;
  @Input() id;
  @Input() type;
  @Input() placeholder;
  @Input() name;
  @Input() disabled;
}
@Component({ selector: 'app-card-doc', template: '' })
class CardDocComponent {
  @Input() document: Document;
  @Input() index: number;
}

describe('MainListComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, NgxPaginationModule, HttpClientModule],
      declarations: [MainListComponent, LabelComponent, ButtonComponent, InputComponent, CardDocComponent, FilterPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect Form  to be defined', () => {
    component.ngOnInit();
    expect(component.documentsForm).toBeDefined();
  });

  it('expect form invalid when empty', () => {
    expect(component.documentsForm.valid).toBeFalsy();
  });

  it('Title field validity', () => {
    const title = component.documentsForm.controls['title'];
    expect(title.valid).toBeFalsy();

    // set title value
    title.setValue('test');
    expect(title.valid).toBeTruthy();
  });

  it('Text field validity', () => {
    const text = component.documentsForm.controls['text'];
    expect(text.valid).toBeFalsy();

    // set Text value
    text.setValue('test');
    expect(text.valid).toBeTruthy();
  });

  it('date field validity', () => {
    const date = component.documentsForm.controls['date'];

    // set date value
    const d = new Date();
    date.setValue(d);
    expect(date.valid).toBeTruthy();
  });

  it('file field validity', () => {
    const date = component.documentsForm.controls['imagePath'];

    // set imagePath value
    date.setValue('fake-image-path');
    expect(date.valid).toBeTruthy();
    expect(component.onFileSelected).toBeDefined();
  });
  it('Expect form to be invalid onClear method', () => {
    component.documentsForm.controls['title'].setValue('Go to Disney');
    component.documentsForm.controls['text'].setValue('Train');
    const d = new Date();
    component.documentsForm.controls['date'].setValue(d);
    component.documentsForm.controls['imagePath'].setValue('fake-url');
    expect(component.documentsForm.valid).toBeTruthy();

    // Trigger the clear function
    component.onClear();

    fixture.detectChanges();

    expect(component.documentsForm.valid).toBeFalsy();
  });
  it('Should call createDocument when new Document', () => {
    const service = TestBed.get(DocsApiService);
    expect(component.documentsForm.valid).toBeFalsy();
    component.documentsForm.controls['title'].setValue('Go to Disney');
    component.documentsForm.controls['text'].setValue('Train');
    const d = new Date();
    component.documentsForm.controls['date'].setValue(d);
    component.documentsForm.controls['imagePath'].setValue('fake-image');
    expect(component.documentsForm.valid).toBeTruthy();

    // Create Spy
    const spy = spyOn(service, 'createDocument').and.callThrough();
    // Trigger the submit function
    component.addDocument();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
  it('Should return a document type', () => {
    const imagePath = 'fake-image';
    const date = 'fake-date';
    let document = component.setDocumentType(date, imagePath);
    expect(document).toBe('Advance');
    document = component.setDocumentType(date, null);
    expect(document).toBe('Custom');
    document = component.setDocumentType(null, null);
    expect(document).toBe('Simple');
  });
});
