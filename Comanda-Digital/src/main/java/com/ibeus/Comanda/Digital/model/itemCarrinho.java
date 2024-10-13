package com.ibeus.Comanda.Digital.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "itemCarrinho")
@Data
public class itemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantidade;

    private Double precoTotal;

    @ManyToOne
    private Dish dish;

    @ManyToOne
    @JoinColumn(name = "carrinho_id")
    @JsonIgnore
    private Carrinho carrinho;
}
