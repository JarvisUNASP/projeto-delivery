package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Carrinho;
import com.ibeus.Comanda.Digital.model.itemCarrinho;
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
    public List<itemCarrinho> findAll() {
        return itemCarrinhoRepository.findAll();
    }

    // Buscar um item específico pelo ID
    public Optional<itemCarrinho> findById(Long id) {
        return itemCarrinhoRepository.findById(id);
    }

    // Adicionar ou atualizar um item no carrinho
    public itemCarrinho save(itemCarrinho item) {
        // Verifica se o Dish está associado e calcula o precoTotal
        if (item.getDish() != null && item.getQuantidade() != null) {
            Dish dish = dishRepository.findById(item.getDish().getId())
                    .orElseThrow(() -> new RuntimeException("Prato não encontrado"));
            item.setPrecoTotal(dish.getPrice() * item.getQuantidade()); // Calcula o preço total
        }

        // Obter o carrinho atual
        Carrinho carrinho = carrinhoService.getCarrinho();
        item.setCarrinho(carrinho); // Atribuir o item ao carrinho

        // Atualizar o valor total do carrinho
        carrinho.setValorTotal(carrinho.getValorTotal() + item.getPrecoTotal());

        // Salvar o item no repositório e atualizar o carrinho
        itemCarrinho savedItem = itemCarrinhoRepository.save(item);
        carrinhoService.getCarrinho().getItens().add(savedItem);

        return savedItem;
    }

    // Remover um item do carrinho
    public void deleteById(Long id) {
        itemCarrinhoRepository.deleteById(id);
    }
}
