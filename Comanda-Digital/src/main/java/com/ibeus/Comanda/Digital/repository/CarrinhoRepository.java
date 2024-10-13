package com.ibeus.Comanda.Digital.repository;

import com.ibeus.Comanda.Digital.model.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
    @Query("SELECT c FROM Carrinho c ORDER BY c.id DESC")
    Carrinho findFirstByOrderByIdDesc();

}
