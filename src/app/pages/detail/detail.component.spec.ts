import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { DocsApiService } from 'src/app/core/docs-api.service';
@Component({ selector: 'app-button', template: '' })
class ButtonComponent {
  @Input() type;
  @Input() disabled;
  @Input() text;
  @Input() class;
}
@Component({ selector: 'app-modal', template: '' })
class ModalComponent {
  @Input() type;
  @Input() disabled;
  @Input() text;
  @Input() class;
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FontAwesomeModule, HttpClientModule],
      declarations: [DetailComponent, ButtonComponent, ModalComponent, FilterPipe],
      providers: [DocsApiService, ModalService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call get document method from service', () => {
    const service = TestBed.get(DocsApiService);
    // Create Spy
    const spy = spyOn(service, 'getDocuments').and.callThrough();
    component.getDocuments();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
  it('Should call open method from modal service', () => {
    const service = TestBed.get(ModalService);
    // Create Spy
    const spy = spyOn(service, 'open').and.stub();
    component.openModal('confirmation-modal');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
  it('Should call close method from modal service', () => {
    const service = TestBed.get(ModalService);
    // Create Spy
    const spy = spyOn(service, 'close').and.stub();
    component.closeModal('confirmation-modal');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
