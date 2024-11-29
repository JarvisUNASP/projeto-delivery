package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Cliente;
import com.ibeus.Comanda.Digital.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Cliente salvarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // Método para buscar todos os clientes
    public List<Cliente> buscarTodosClientes() {
        return clienteRepository.findAll();
    }

    // Método para buscar um cliente por ID
    public Optional<Cliente> buscarClientePorId(Long id) {
        return clienteRepository.findById(id);
    }
}
