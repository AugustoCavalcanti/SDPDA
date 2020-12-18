import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorSemAnimacaoComponent } from './simulador-sem-animacao.component';

describe('SimuladorSemAnimacaoComponent', () => {
  let component: SimuladorSemAnimacaoComponent;
  let fixture: ComponentFixture<SimuladorSemAnimacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorSemAnimacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorSemAnimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
