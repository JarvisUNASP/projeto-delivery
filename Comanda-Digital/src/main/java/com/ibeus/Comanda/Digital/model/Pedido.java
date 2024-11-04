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
    //private StatusPedido status = StatusPedido.EM_TRANSPORTE;
    private StatusPedido status = StatusPedido.PREPARANDO;

    public void setMotoboyId(Long motoboyId) {
        this.motoboyId = motoboyId;
    }

    public long getMotoboyId(){
        return motoboyId;}

    public StatusPedido getStatus() {
        return status;
    }

    public void setStatus(String emTransporte) {
        status = StatusPedido.EM_TRANSPORTE;
    }
}
