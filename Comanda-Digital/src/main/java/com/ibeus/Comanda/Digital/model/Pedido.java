package com.ibeus.Comanda.Digital.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "pedido")
@Data
public class Pedido {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long Id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;


    private Long motoboyId;

    @Enumerated(EnumType.STRING)
    private StatusPedido status = StatusPedido.EM_TRANSPORTE;
}
