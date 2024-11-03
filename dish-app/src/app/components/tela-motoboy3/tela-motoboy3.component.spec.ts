import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMotoboy3Component } from './tela-motoboy3.component';

describe('TelaMotoboy3Component', () => {
  let component: TelaMotoboy3Component;
  let fixture: ComponentFixture<TelaMotoboy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMotoboy3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMotoboy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
