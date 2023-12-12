import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCompraComponent } from './cadastro-compra.component';

describe('CadastroCompraComponent', () => {
  let component: CadastroCompraComponent;
  let fixture: ComponentFixture<CadastroCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
