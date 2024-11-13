package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Motoboy;
import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.model.StatusPedido;
import com.ibeus.Comanda.Digital.repository.MotoboyRepository;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CozinhaService {

    @Autowired
    private MotoboyRepository motoboyRepository;

    @Autowired
    private PedidoRepository pedidoRepository;

    public boolean atribuirPedidoAoPrimeiroMotoboyDisponivel(Long pedidoId) {
        // Busca o primeiro motoboy disponível
        Optional<Motoboy> motoboyOptional = motoboyRepository.findAll().stream()
                .filter(Motoboy::isDisponivel)
                .findFirst();

        Optional<Pedido> pedidoOptional = pedidoRepository.findById(pedidoId);

        if (motoboyOptional.isPresent() && pedidoOptional.isPresent()) {
            Motoboy motoboy = motoboyOptional.get();
            Pedido pedido = pedidoOptional.get();

            // Verifica se o pedido está no status "PREPARANDO" para permitir a atribuição
            if (pedido.getStatus() != StatusPedido.PREPARANDO) {
                return false; // Pedido não está em um estado que permite atribuição
            }

            // Atribuir o pedido ao motoboy e atualizar o status para EM_TRANSPORTE
            pedido.setMotoboyId(motoboy.getId());
            pedido.setStatus(StatusPedido.EM_TRANSPORTE);
            pedidoRepository.save(pedido);

            // Definir o motoboy como indisponível
            motoboy.setDisponivel(false);
            motoboyRepository.save(motoboy);

            return true;
        } else {
            return false; // Motoboy disponível ou pedido não encontrado
        }
}
}