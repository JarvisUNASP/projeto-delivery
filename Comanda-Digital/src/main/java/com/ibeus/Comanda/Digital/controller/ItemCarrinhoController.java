package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.model.itemCarrinho;
import com.ibeus.Comanda.Digital.service.ItemCarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/item-carrinho")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemCarrinhoController {

    @Autowired
    private ItemCarrinhoService itemCarrinhoService;

    // Listar todos os itens do carrinho
    @GetMapping
    public ResponseEntity<List<itemCarrinho>> getAllItems() {
        List<itemCarrinho> items = itemCarrinhoService.findAll();
        return ResponseEntity.ok(items);
    }

    // Buscar um item específico pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<itemCarrinho> getItemById(@PathVariable Long id) {
        return itemCarrinhoService.findById(id)
                .map(item -> ResponseEntity.ok(item))
                .orElse(ResponseEntity.notFound().build());
    }

    // Adicionar um novo item no carrinho
    @PostMapping
    public ResponseEntity<itemCarrinho> createItem(@RequestBody itemCarrinho item) {
        itemCarrinho savedItem = itemCarrinhoService.save(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedItem);
    }

    // Atualizar um item no carrinho
    @PutMapping("/{id}")
    public ResponseEntity<itemCarrinho> updateItem(@PathVariable Long id, @RequestBody itemCarrinho item) {
        if (!itemCarrinhoService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        item.setId(id); // Garantir que o ID seja o correto
        itemCarrinho updatedItem = itemCarrinhoService.save(item);
        return ResponseEntity.ok(updatedItem);
    }

    // Remover um item do carrinho pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        if (!itemCarrinhoService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        itemCarrinhoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
