package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.itemCarrinho;
import com.ibeus.Comanda.Digital.repository.ItemCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemCarrinhoService {

    @Autowired
    private ItemCarrinhoRepository itemCarrinhoRepository;

    // Listar todos os itens do carrinho
    public List<itemCarrinho> findAll() {
        return itemCarrinhoRepository.findAll();
    }

    // Buscar um item específico pelo ID
    public Optional<itemCarrinho> findById(Long id) {
        return itemCarrinhoRepository.findById(id);
    }

    // Adicionar ou atualizar um item no carrinho (erro 500 )
    public itemCarrinho save(itemCarrinho item) {
        return itemCarrinhoRepository.save(item);
    }

    // Remover um item do carrinho
    public void deleteById(Long id) {
        itemCarrinhoRepository.deleteById(id);
    }
}
