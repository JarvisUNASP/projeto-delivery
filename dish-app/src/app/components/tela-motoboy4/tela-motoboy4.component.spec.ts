import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMotoboy4Component } from './tela-motoboy4.component';

describe('TelaMotoboy4Component', () => {
  let component: TelaMotoboy4Component;
  let fixture: ComponentFixture<TelaMotoboy4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMotoboy4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaMotoboy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
