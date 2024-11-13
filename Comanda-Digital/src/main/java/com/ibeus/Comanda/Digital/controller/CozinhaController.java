package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.service.CozinhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cozinha")
@CrossOrigin(origins = "http://localhost:4200")
public class CozinhaController {

    @Autowired
    private CozinhaService cozinhaService;

    // Endpoint para atribuir automaticamente o pedido ao primeiro motoboy disponível
    @PostMapping("/atribuirPedido/{pedidoId}")
    public ResponseEntity<?> atribuirPedidoAoPrimeiroMotoboy(@PathVariable Long pedidoId) {
        boolean atribuido = cozinhaService.atribuirPedidoAoPrimeiroMotoboyDisponivel(pedidoId);

        if (atribuido) {
            return ResponseEntity.ok("Pedido atribuído com sucesso ao primeiro motoboy disponível!");
        } else {
            return ResponseEntity.status(404).body("Não foi possível atribuir o pedido. Nenhum motoboy disponível ou pedido inválido.");
        }
    }
}