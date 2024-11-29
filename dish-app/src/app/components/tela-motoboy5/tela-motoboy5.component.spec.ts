import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMotoboy5Component } from './tela-motoboy5.component';

describe('TelaMotoboy5Component', () => {
  let component: TelaMotoboy5Component;
  let fixture: ComponentFixture<TelaMotoboy5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMotoboy5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMotoboy5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
