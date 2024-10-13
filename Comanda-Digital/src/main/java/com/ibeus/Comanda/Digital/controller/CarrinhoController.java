package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.model.Carrinho;
import com.ibeus.Comanda.Digital.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinho")
@CrossOrigin(origins = "http://localhost:4200")
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    @GetMapping
    public ResponseEntity<Carrinho> getCarrinho() {
        Carrinho carrinho = carrinhoService.getCarrinho();
        return ResponseEntity.ok(carrinho);
    }


    @PostMapping("/adicionar/{dishId}")
    public ResponseEntity<String> adicionarItemCarrinho(@PathVariable Long dishId, @RequestParam Integer quantidade) {
        try {
            carrinhoService.adicionarItem(dishId, quantidade);
            return ResponseEntity.ok("Item adicionado ao carrinho com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao adicionar item ao carrinho.");
        }
    }
}
