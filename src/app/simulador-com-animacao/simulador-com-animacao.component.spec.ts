import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorComAnimacaoComponent } from './simulador-com-animacao.component';

describe('SimuladorComAnimacaoComponent', () => {
  let component: SimuladorComAnimacaoComponent;
  let fixture: ComponentFixture<SimuladorComAnimacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorComAnimacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorComAnimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
