package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Carrinho;
import com.ibeus.Comanda.Digital.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CarrinhoService {

    @Autowired
    CarrinhoRepository carrinhoRepository;

    public Carrinho getCarrinho() {
        // Buscar o carrinho no banco de dados
        Carrinho carrinho = carrinhoRepository.findFirstByOrderByIdDesc(); // Pega o carrinho mais recente

        if (carrinho == null) {
            // Se não existir um carrinho, cria um novo
            carrinho = new Carrinho();
            carrinho.setValorTotal(0.0); // Inicializa o valor total
            carrinho.setItens(new ArrayList<>()); // Inicializa a lista de itens
            carrinhoRepository.save(carrinho); // Salva o novo carrinho
        }

        return carrinho; // Retorna o carrinho encontrado
    }

}
