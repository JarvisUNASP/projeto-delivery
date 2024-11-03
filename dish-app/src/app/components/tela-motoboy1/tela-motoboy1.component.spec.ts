import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMotoboy1Component } from './tela-motoboy1.component';

describe('TelaMotoboy1Component', () => {
  let component: TelaMotoboy1Component;
  let fixture: ComponentFixture<TelaMotoboy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMotoboy1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMotoboy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
