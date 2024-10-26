package com.ibeus.Comanda.Digital.service;

import com.ibeus.Comanda.Digital.model.Motoboy;
import com.ibeus.Comanda.Digital.repository.MotoboyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class MotoboyService {

    @Autowired
    private MotoboyRepository motoboyRepository;


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
}


