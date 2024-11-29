import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPratosComponent } from './criar-pratos.component';

describe('CriarPratosComponent', () => {
  let component: CriarPratosComponent;
  let fixture: ComponentFixture<CriarPratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
