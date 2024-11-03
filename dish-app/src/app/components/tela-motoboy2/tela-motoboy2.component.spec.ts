import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMotoboy2Component } from './tela-motoboy2.component';

describe('TelaMotoboy2Component', () => {
  let component: TelaMotoboy2Component;
  let fixture: ComponentFixture<TelaMotoboy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMotoboy2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMotoboy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
