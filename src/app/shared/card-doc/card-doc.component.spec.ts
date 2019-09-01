import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { CardDocComponent } from './card-doc.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';

@Component({ selector: 'app-button', template: '' })
class ButtonComponent {
  @Input() type;
  @Input() disabled;
  @Input() text;
  @Input() class;
}

describe('CardDocComponent', () => {
  let component: CardDocComponent;
  let fixture: ComponentFixture<CardDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardDocComponent, ButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('imageUrl should have a value', () => {
    component.document = { title: 'title', text: 'text', type: 'advanced', date: '1/1/1986', imagePath: 'fake-path' };
    component.ngOnInit();
    expect(component.imageUrl).toBeDefined();
  });
});
