//fornece uma interface para o front end eviar solicitações HTTP para atribuir um pedido ao motoboy

package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.service.CozinhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController //permite a comunicação com outras partes do sistema
@RequestMapping("/cozinha")
@CrossOrigin(origins = "http://localhost:4200")
public class CozinhaController {

    @Autowired
    private CozinhaService cozinhaService; // lógica para atribuir pedidos ao motoboy

    // Endpoint para atribuir automaticamente o pedido ao primeiro motoboy disponível
    @PostMapping("/atribuirPedido/{pedidoId}")
    public ResponseEntity<?> atribuirPedidoAoPrimeiroMotoboy(@PathVariable Long pedidoId) {
        boolean atribuido = cozinhaService.atribuirPedidoAoPrimeiroMotoboyDisponivel(pedidoId);

        if (atribuido) { //atribuido com sucesso, resposta HTTP 200 ok
            return ResponseEntity.ok("Pedido atribuído com sucesso ao primeiro motoboy disponível!");
        } else { //falha, resposta 404 com uma mensagem de ero
            return ResponseEntity.status(404).body("Não foi possível atribuir o pedido. Nenhum motoboy disponível ou pedido inválido.");
        }
    }
}