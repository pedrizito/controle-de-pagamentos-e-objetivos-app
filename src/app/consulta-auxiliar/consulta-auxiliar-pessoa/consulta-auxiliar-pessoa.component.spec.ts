import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAuxiliarPessoaComponent } from './consulta-auxiliar-pessoa.component';

describe('ConsultaAuxiliarPessoaComponent', () => {
  let component: ConsultaAuxiliarPessoaComponent;
  let fixture: ComponentFixture<ConsultaAuxiliarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAuxiliarPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAuxiliarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
