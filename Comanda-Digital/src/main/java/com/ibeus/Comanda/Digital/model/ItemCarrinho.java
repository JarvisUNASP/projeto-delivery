package com.ibeus.Comanda.Digital.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "itens_carrinho")
@Data
public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantidade;

    private Double precoTotal;

    @OneToOne
    private Dish dish;

    @ManyToOne
    @JoinColumn(name = "carrinho_id")
    @JsonIgnore
    private Carrinho carrinho;
}
