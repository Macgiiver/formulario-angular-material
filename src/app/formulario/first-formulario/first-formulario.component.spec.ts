import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFormularioComponent } from './first-formulario.component';

describe('FirstFormularioComponent', () => {
  let component: FirstFormularioComponent;
  let fixture: ComponentFixture<FirstFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
