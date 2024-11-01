package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.model.StatusPedido;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Optional<Pedido> buscarPedidoPorId(Long pedidoId) {
        return pedidoRepository.findById(pedidoId);
    }

    public boolean finalizarPedido(Long pedidoId) {
        Optional<Pedido> pedidoOptional = buscarPedidoPorId(pedidoId);
        if (pedidoOptional.isPresent()) {
            Pedido pedido = pedidoOptional.get();
            if (pedido.getStatus() == StatusPedido.EM_TRANSPORTE) {
                pedido.setStatus(StatusPedido.ENTREGUE);
                pedidoRepository.save(pedido);
                return true;
            }
        }
        return false;
    }
}
