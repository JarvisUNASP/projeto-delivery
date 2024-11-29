package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.model.Carrinho;
import com.ibeus.Comanda.Digital.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
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

}
