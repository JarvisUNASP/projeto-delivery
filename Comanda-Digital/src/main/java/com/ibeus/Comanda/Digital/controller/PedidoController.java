package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.service.PedidoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedido")
@CrossOrigin(origins = "http://localhost:4200")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    // Endpoint para criar um pedido com o status inicial "PREPARANDO" e associar o único carrinho existente
    @PostMapping("/criar")
    public ResponseEntity<?> criarPedidoDoCarrinho(@RequestParam Long clienteId) {
        try {
            Pedido pedido = pedidoService.criarPedidoDoCarrinho(clienteId);
            return ResponseEntity.ok(pedido);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao criar pedido. Verifique as informações fornecidas.");
        }
    }

    @GetMapping("/{pedidoId}")
    public ResponseEntity<Pedido> buscarPedidoPorId(@PathVariable Long pedidoId) {
        return pedidoService.buscarPedidoPorId(pedidoId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    /*
    @PostMapping("/finalizar/{pedidoId}")
    public ResponseEntity<String> finalizarPedido(@PathVariable Long pedidoId) {
        boolean finalizado = pedidoService.finalizarPedido(pedidoId);
        if (finalizado) {
            return ResponseEntity.ok("Pedido finalizado com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("INFELIZMENTE, NAO CONSEGUIMOS ADC O PEDIDO.");
        }
    } */
}
