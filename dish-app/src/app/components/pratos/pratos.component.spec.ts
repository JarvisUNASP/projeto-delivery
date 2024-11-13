import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosComponent } from './pratos.component';

describe('PratosComponent', () => {
  let component: PratosComponent;
  let fixture: ComponentFixture<PratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
