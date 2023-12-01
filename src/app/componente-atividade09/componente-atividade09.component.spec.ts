import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAtividade09Component } from './componente-atividade09.component';

describe('ComponenteAtividade09Component', () => {
  let component: ComponenteAtividade09Component;
  let fixture: ComponentFixture<ComponenteAtividade09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAtividade09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAtividade09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
