package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Carrinho;
import com.ibeus.Comanda.Digital.model.Dish;
import com.ibeus.Comanda.Digital.model.itemCarrinho;
import com.ibeus.Comanda.Digital.repository.CarrinhoRepository;
import com.ibeus.Comanda.Digital.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CarrinhoService {

    @Autowired
    CarrinhoRepository carrinhoRepository;

    @Autowired
    private DishRepository dishRepository;

    public void adicionarItem(Long dishId, Integer quantidade) {
        // Recupera o prato pelo ID
        Dish dish = dishRepository.findById(dishId)
                .orElseThrow(() -> new RuntimeException("Prato não encontrado"));

        // Cria um novo itemCarrinho
        itemCarrinho novoItem = new itemCarrinho();
        novoItem.setDish(dish);
        novoItem.setQuantidade(quantidade);
        novoItem.setPrecoTotal(dish.getPrice() * quantidade);

        // Recupera o carrinho
        Carrinho carrinho = getCarrinho();

        // Adiciona a referência do carrinho ao item
        novoItem.setCarrinho(carrinho);

        // Adiciona o item ao carrinho
        carrinho.getItens().add(novoItem);
        carrinho.setValorTotal(carrinho.getValorTotal() + novoItem.getPrecoTotal());

        // Salva o carrinho
        carrinhoRepository.save(carrinho);
    }



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
