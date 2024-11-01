package com.ibeus.Comanda.Digital.repository;

import com.ibeus.Comanda.Digital.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
