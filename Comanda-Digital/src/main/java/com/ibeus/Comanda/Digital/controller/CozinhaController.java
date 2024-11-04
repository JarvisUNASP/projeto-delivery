package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.model.Motoboy;
import com.ibeus.Comanda.Digital.service.CozinhaService;
import com.ibeus.Comanda.Digital.service.MotoboyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("/cozinha")
@CrossOrigin(origins = "http://localhost:4200")
public class CozinhaController {

    @Autowired
    private CozinhaService cozinhaService;
    @PostMapping("/{motoboyId}/atribuirPedido/{pedidoId}")
    public ResponseEntity<String> atribuirPedidoAoMotoboy(
            @PathVariable Long motoboyId, @PathVariable Long pedidoId) {
        boolean sucesso = cozinhaService.atribuirPedidoAoMotoboy(motoboyId, pedidoId);
        if (sucesso) {
            return ResponseEntity.ok("Pedido atribuído ao motoboy e ele está indisponível.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Falha: Motoboy não disponível ou pedido não encontrado.");
        }
    }


}
