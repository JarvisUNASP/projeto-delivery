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
public class MotoboyService {

    @Autowired
    private MotoboyRepository motoboyRepository;
    @Autowired
    private PedidoService pedidoService;

    @Autowired
    private PedidoRepository pedidoRepository;



    public boolean iniciarTrabalho(Long id) {
        Optional<Motoboy> motoboyOptional = motoboyRepository.findById(id);
        if (motoboyOptional.isPresent()) {
            Motoboy motoboy = motoboyOptional.get();
            if (!motoboy.isDisponivel()) {
                motoboy.setDisponivel(true);
                motoboyRepository.save(motoboy);
                return true;
            }
        }
        return false;
    }

    public Cliente obterEnderecoECliente(Long pedidoId) {
        Optional<Pedido> pedidoOptional = pedidoService.buscarPedidoPorId(pedidoId);
        if (pedidoOptional.isPresent()) {
            Pedido pedido = pedidoOptional.get();
            Cliente cliente = pedido.getCliente();
            return cliente;
        } else {
            throw new RuntimeException("Pedido não encontrado");
        }
    }


    public boolean finalizarPedido(Long pedidoId,Long motoboyId) {
        boolean sucesso = pedidoService.finalizarPedido(pedidoId);
        if (sucesso) {
            // Tornar o motoboy disponível novamente
            Optional<Motoboy> motoboyOptional = motoboyRepository.findById(motoboyId);
            if (motoboyOptional.isPresent()) {
                Motoboy motoboy = motoboyOptional.get();
                motoboy.setDisponivel(true);  // Motoboy disponível para novos pedidos
                motoboyRepository.save(motoboy);
            }
            return true;
        } else {
            return false;
        }
    }

    public void encerrarJornada(Long motoboyId) {
        Optional<Motoboy> motoboyOptional = motoboyRepository.findById(motoboyId);
        if (motoboyOptional.isPresent()) {
            Motoboy motoboy = motoboyOptional.get();
            motoboy.setDisponivel(false);  // Motoboy indisponível para novos pedidos
            motoboyRepository.save(motoboy);
        }
    }

    public Optional<Motoboy> buscarMotoboyPorId(Long motoboyId) {
        return motoboyRepository.findById(motoboyId);
    }

}


