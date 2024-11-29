import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDoPedidoComponent } from './detalhes-do-pedido.component';

describe('DetalhesDoPedidoComponent', () => {
  let component: DetalhesDoPedidoComponent;
  let fixture: ComponentFixture<DetalhesDoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDoPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesDoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
