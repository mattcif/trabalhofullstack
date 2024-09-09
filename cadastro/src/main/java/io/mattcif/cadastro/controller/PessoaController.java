package io.mattcif.cadastro.controller;

import io.mattcif.cadastro.dto.PessoaDto;
import io.mattcif.cadastro.model.Pessoa;
import io.mattcif.cadastro.repository.PessoaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PessoaController {

    final PessoaRepository pessoaRepository;

    @PostMapping("/cadastro")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> cadastrarPessoa(@RequestBody PessoaDto dto) {
        try {
            Pessoa pessoa = new Pessoa(dto);
            pessoaRepository.save(pessoa);
            return new ResponseEntity<>("Pessoa cadastrada com sucesso", HttpStatus.CREATED);
        } catch (Exception ex) {
            return new ResponseEntity<>("Erro ao cadastrar pessoa.", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/pessoas")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Pessoa>> listarPessoasCadastradas() {
        try {
            List<Pessoa> listaPessoasCadastradas = pessoaRepository.findAll();
            return ResponseEntity.ok(listaPessoasCadastradas);
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
