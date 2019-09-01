import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('modal should exists after open method call', () => {
    component.open();
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('.cd-modal__open');
    expect(elem).toBeDefined();
  });

  it('should create', () => {
    component.close();
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector('.cd-modal__open');
    expect(elem).toBeNull();
  });
});
