package com.ibeus.Comanda.Digital.controller;

import com.ibeus.Comanda.Digital.model.Cliente;
import com.ibeus.Comanda.Digital.model.Motoboy;
import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;
import com.ibeus.Comanda.Digital.service.MotoboyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/motoboy")
@CrossOrigin(origins = "http://localhost:4200")
public class MotoboyController {

    @Autowired
    private MotoboyService motoboyService;

    @Autowired
    private PedidoRepository pedidoRepository;

    @PostMapping("/{id}/iniciar")
    public ResponseEntity<String> iniciarTrabalho(@PathVariable Long id) {
        boolean sucesso = motoboyService.iniciarTrabalho(id);
        if (sucesso) {
            return ResponseEntity.ok("Motoboy está agora disponível.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Motoboy não encontrado ou já está disponível.");
        }
    }

    @GetMapping("/{pedidoId}/pedido-info")
    public ResponseEntity<Cliente> obterDadosCliente(@PathVariable Long pedidoId) {
        return ResponseEntity.ok(motoboyService.obterEnderecoECliente(pedidoId));
    }

    @PostMapping("/{motoboyId}/finalizarPedido/{pedidoId}")
    public ResponseEntity<String> finalizarPedido(
            @PathVariable Long motoboyId, @PathVariable Long pedidoId) {
        boolean sucesso = motoboyService.finalizarPedido(pedidoId, motoboyId);
        if (sucesso) {
            return ResponseEntity.ok("Pedido finalizado e motoboy disponível para novos pedidos.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Não foi possível finalizar o pedido.");
        }
    }

    @PostMapping("/{motoboyId}/encerrarJornada")
    public ResponseEntity<String> encerrarJornada(@PathVariable Long motoboyId) {
        motoboyService.encerrarJornada(motoboyId);
        return ResponseEntity.ok("Jornada do motoboy encerrada. Não estará mais disponível para novos pedidos.");
    }

    @GetMapping("/{motoboyId}/status")
    public ResponseEntity<String> obterStatusMotoboy(@PathVariable Long motoboyId) {
        Optional<Motoboy> motoboyOptional = motoboyService.buscarMotoboyPorId(motoboyId);
        if (motoboyOptional.isPresent()) {
            Motoboy motoboy = motoboyOptional.get();
            String status = motoboy.isDisponivel() ? "Disponível" : "Indisponível";
            return ResponseEntity.ok("Status do Motoboy: " + status);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Motoboy não encontrado.");
        }
    }

    @GetMapping("/{motoboyId}")
    public ResponseEntity<Long> obterPedidoId(@PathVariable Long motoboyId) {
        Optional<Pedido> pedidoOpt = pedidoRepository.findByMotoboyId(motoboyId);
        if (pedidoOpt.isPresent()) {
            return ResponseEntity.ok(pedidoOpt.get().getId());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(0l);
        }
    }
}
