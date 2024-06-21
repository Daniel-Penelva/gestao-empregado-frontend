import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverEmpregadoComponent } from './remover-empregado.component';

describe('RemoverEmpregadoComponent', () => {
  let component: RemoverEmpregadoComponent;
  let fixture: ComponentFixture<RemoverEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoverEmpregadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoverEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
