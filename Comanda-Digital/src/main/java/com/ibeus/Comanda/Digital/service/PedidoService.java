package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.*;
import com.ibeus.Comanda.Digital.repository.CarrinhoRepository;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;
import com.ibeus.Comanda.Digital.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Autowired
    private CarrinhoService carrinhoService;

    @Autowired
    private ClienteRepository clienteRepository; // Novo: injeção do ClienteRepository

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

    // Novo método para criar um pedido a partir do carrinho atual
    public Pedido criarPedidoDoCarrinho(Long clienteId, Long motoboyId) {
        // Obter o carrinho atual
        Carrinho carrinho = carrinhoService.getCarrinho();

        // Buscar o cliente no banco de dados usando o ID
        Cliente cliente = clienteRepository.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        // Criar um novo pedido e associar o cliente e motoboy
        Pedido pedido = new Pedido();
        pedido.setCliente(cliente); // Define o cliente encontrado
        pedido.setMotoboyId(motoboyId);
        pedido.setStatus(StatusPedido.EM_TRANSPORTE);

        // Salvar o pedido
        pedidoRepository.save(pedido);

        // Limpar o carrinho após o pedido ser criado (opcional)
        carrinho.getItens().clear();
        carrinho.setValorTotal(0.0);
        carrinhoRepository.save(carrinho);

        return pedido;
    }
}
