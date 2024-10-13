package com.ibeus.Comanda.Digital.repository;


import com.ibeus.Comanda.Digital.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
