import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAuxiliarComponent } from './view-child-auxiliar.component';

describe('ViewChildAuxiliarComponent', () => {
  let component: ViewChildAuxiliarComponent;
  let fixture: ComponentFixture<ViewChildAuxiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildAuxiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
