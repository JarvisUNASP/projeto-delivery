package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.service.MotoboyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/motoboy")
@CrossOrigin(origins = "http://localhost:4200")
public class MotoboyController {

    @Autowired
    private MotoboyService motoboyService;

    @PostMapping("/{id}/iniciar")
    public ResponseEntity<String> iniciarTrabalho(@PathVariable Long id) {
        boolean sucesso = motoboyService.iniciarTrabalho(id);
        if (sucesso) {
            return ResponseEntity.ok("Motoboy está agora disponível.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Motoboy não encontrado ou já está disponível.");
        }
    }

    //Teste
    @GetMapping("/{pedidoId}/pedido-info")
    public ResponseEntity<String> obterEnderecoECliente(@PathVariable Long pedidoId) {
        String resposta = motoboyService.obterEnderecoECliente(pedidoId);
        return ResponseEntity.ok(resposta);
    }

    @PostMapping("/{pedidoId}/finalizarPedido")
    public ResponseEntity<String> finalizarPedido(@PathVariable Long pedidoId) {
        boolean sucesso = motoboyService.finalizarPedido(pedidoId);
        if (sucesso) {
            return ResponseEntity.ok("Pedido finalizado com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Falha ao finalizar o pedido.");
        }
    }






}
