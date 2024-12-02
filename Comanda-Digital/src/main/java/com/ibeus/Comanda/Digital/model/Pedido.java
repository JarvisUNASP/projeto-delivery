package com.ibeus.Comanda.Digital.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "pedido")
@Data
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    private Long motoboyId;

    @Enumerated(EnumType.STRING)
    private StatusPedido status = StatusPedido.EM_TRANSPORTE;

    private Double valorTotal; // Novo campo para armazenar o valor total do carrinho
}
