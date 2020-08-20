import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilhaDeAreiaComponent } from './pilha-de-areia.component';

describe('PilhaDeAreiaComponent', () => {
  let component: PilhaDeAreiaComponent;
  let fixture: ComponentFixture<PilhaDeAreiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilhaDeAreiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilhaDeAreiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
