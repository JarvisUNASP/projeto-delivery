package com.ibeus.Comanda.Digital.repository;

import com.ibeus.Comanda.Digital.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

    Optional<Pedido> findByMotoboyId(Long motoboyId);
}
