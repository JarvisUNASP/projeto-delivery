import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCozinhaComponent } from './tela-cozinha.component';

describe('TelaCozinhaComponent', () => {
  let component: TelaCozinhaComponent;
  let fixture: ComponentFixture<TelaCozinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCozinhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
