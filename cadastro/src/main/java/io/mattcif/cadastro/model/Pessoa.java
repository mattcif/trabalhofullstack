package io.mattcif.cadastro.model;


import io.mattcif.cadastro.dto.PessoaDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String cpf;

    private String phone;

    public Pessoa(PessoaDto dto) {
        this.name = dto.name();
        this.cpf = dto.cpf();
        this.phone = dto.phone();
    }
}
