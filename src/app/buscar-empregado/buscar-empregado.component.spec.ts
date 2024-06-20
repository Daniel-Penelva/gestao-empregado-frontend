import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEmpregadoComponent } from './buscar-empregado.component';

describe('BuscarEmpregadoComponent', () => {
  let component: BuscarEmpregadoComponent;
  let fixture: ComponentFixture<BuscarEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarEmpregadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
