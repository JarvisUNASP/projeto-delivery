package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Cliente;
import com.ibeus.Comanda.Digital.model.Motoboy;
import com.ibeus.Comanda.Digital.model.Pedido;
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
    private PedidoService pedidoService;

    @Autowired
    private PedidoRepository pedidoRepository;


    public boolean atribuirPedidoAoMotoboy(Long motoboyId, Long pedidoId) {
        Optional<Motoboy> motoboyOptional = motoboyRepository.findById(motoboyId);
        Optional<Pedido> pedidoOptional = pedidoRepository.findById(pedidoId);

        if (motoboyOptional.isPresent() && pedidoOptional.isPresent()) {
            Motoboy motoboy = motoboyOptional.get();

            // Verifica se o motoboy está disponível
            if (!motoboy.isDisponivel()) {
                // Se não estiver disponível, não atribui o pedido
                return false;
            }

            Pedido pedido = pedidoOptional.get();

            // Atualizar o pedido com o motoboy atribuído
            pedido.setMotoboyId(motoboyId);
            pedidoRepository.save(pedido);

            // Definir o motoboy como indisponível
            motoboy.setDisponivel(false);
            motoboyRepository.save(motoboy);

            return true;

           /* // Verifica se o pedido está no status "PREPARANDO" para permitir a atribuição
            if (!"PREPARANDO".equals(pedido.getStatus())) {
                return false; // Pedido não está em um estado que permite atribuição
            }

            // Atribuir o pedido ao motoboy e atualizar o status para EM_TRANSPORTE
            pedido.setMotoboyId(motoboyId);
            pedido.setStatus("EM_TRANSPORTE");
            pedidoRepository.save(pedido);

            // Definir o motoboy como indisponível
            motoboy.setDisponivel(false);
            motoboyRepository.save(motoboy);*/
        } else {
            return false; // Motoboy ou pedido não encontrados
}
}
}


