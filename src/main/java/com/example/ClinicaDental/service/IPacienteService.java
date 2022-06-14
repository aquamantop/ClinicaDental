package com.example.ClinicaDental.service;

import com.example.ClinicaDental.model.Paciente;
import java.util.List;

public interface IPacienteService {

    Paciente guardar(Paciente p);
    Paciente buscar(int id);
    Paciente buscarPorEmail(String email);
    Paciente eliminar(Paciente p);
    List<Paciente> listar();

}
