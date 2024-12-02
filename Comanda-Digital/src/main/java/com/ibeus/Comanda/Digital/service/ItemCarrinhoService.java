package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Carrinho;
import com.ibeus.Comanda.Digital.model.ItemCarrinho;
import com.ibeus.Comanda.Digital.model.Dish;
import com.ibeus.Comanda.Digital.repository.ItemCarrinhoRepository;
import com.ibeus.Comanda.Digital.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemCarrinhoService {

    @Autowired
    private ItemCarrinhoRepository itemCarrinhoRepository;

    @Autowired
    private DishRepository dishRepository;

    @Autowired
    private CarrinhoService carrinhoService;

    // Listar todos os itens do carrinho
    public List<ItemCarrinho> findAll() {
        return itemCarrinhoRepository.findAll();
    }

    // Buscar um item específico pelo ID
    public Optional<ItemCarrinho> findById(Long id) {
        return itemCarrinhoRepository.findById(id);
    }

    // Adicionar ou atualizar um item no carrinho
    public ItemCarrinho save(Long dishId) {
        Dish prato = dishRepository.findById(dishId).orElseThrow(() -> new RuntimeException("Prato não encontrado"));
        Optional<ItemCarrinho> itemOpt = itemCarrinhoRepository.findByDish(prato);
        ItemCarrinho item;

        // Obter o carrinho atual
        Carrinho carrinho = carrinhoService.getCarrinho();

        if(itemOpt.isPresent()){
            item = itemOpt.get();
            item.setQuantidade(item.getQuantidade() + 1);
            item.setPrecoTotal(item.getPrecoTotal() + prato.getPrice());
        } else {
            item = new ItemCarrinho();
            item.setDish(prato);
            item.setPrecoTotal(prato.getPrice());
            item.setQuantidade(1);
            item.setCarrinho(carrinho);
        }

        // Atualizar o valor total do carrinho
        carrinho.setValorTotal(carrinho.getValorTotal() + prato.getPrice());

        // Salvar o item no repositório e atualizar o carrinho
        ItemCarrinho savedItem = itemCarrinhoRepository.save(item);
        carrinhoService.getCarrinho().getItens().add(savedItem);

        return savedItem;
    }

    // Remover um item do carrinho
    public void deleteById(Long id) {
        Carrinho carrinho = carrinhoService.getCarrinho();
        ItemCarrinho item = itemCarrinhoRepository.getById(id);
        carrinho.setValorTotal(carrinho.getValorTotal() - item.getPrecoTotal());
        itemCarrinhoRepository.deleteById(id);
    }
}
