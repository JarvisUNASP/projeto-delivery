package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.*;
import com.ibeus.Comanda.Digital.repository.CarrinhoRepository;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;
import com.ibeus.Comanda.Digital.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

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

    // Método para criar um pedido com o único carrinho disponível
    public Pedido criarPedidoDoCarrinho(Long clienteId) {
        // Buscar o cliente no banco de dados usando o ID
        Cliente cliente = clienteRepository.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        // Buscar o único carrinho existente
        List<Carrinho> carrinhos = carrinhoRepository.findAll();
        if (carrinhos.isEmpty()) {
            throw new RuntimeException("Nenhum carrinho encontrado.");
        }
        Carrinho carrinho = carrinhos.get(0); // Assume que existe apenas um carrinho

        // Criar um novo pedido e associar o cliente e o carrinho
        Pedido pedido = new Pedido();
        pedido.setCliente(cliente);
        pedido.setCarrinho(carrinho);
        pedido.setStatus(StatusPedido.PREPARANDO); // Define o status inicial como PREPARANDO
        pedido.setValorTotal(carrinho.getValorTotal()); // Define o valor total do pedido com base no carrinho

        // Salvar o pedido
        pedidoRepository.save(pedido);

        // Limpar o carrinho após o pedido ser criado (opcional)
        carrinho.getItens().clear();
        carrinho.setValorTotal(0.0);
        carrinhoRepository.save(carrinho);

        return pedido;
    }
}
