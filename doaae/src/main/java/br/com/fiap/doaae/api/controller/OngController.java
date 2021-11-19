package br.com.fiap.doaae.api.controller;

import br.com.fiap.doaae.api.model.ONG;
import br.com.fiap.doaae.repository.OngRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/ong")
public class OngController {

    @Autowired
    private OngRepository ongRepository;

    @PostMapping
    public ResponseEntity<ONG> create(@RequestBody ONG ong, UriComponentsBuilder builder) {
        ONG ongSave = ongRepository.save(ong);
        URI uri = builder.path("/api/v1/ong/{id}")
                .buildAndExpand(ongSave.getCdOng())
                .toUri();
        return ResponseEntity.created(uri).body(ongSave);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ONG> showById(@PathVariable Long id) {
        Optional<ONG> optionalONG = ongRepository.getByCdOng(id);
        if(optionalONG.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(optionalONG.get());
    }

    @GetMapping("/list")
    public ResponseEntity<List<ONG>> listAll() {
        List<ONG> ongs = ongRepository.findAll();
        return ResponseEntity.ok(ongs);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ONG> update(@PathVariable Long id, @RequestBody ONG newOng) {
        Optional<ONG> optionalONG = ongRepository.getByCdOng(id);

        if(optionalONG.isEmpty()) return ResponseEntity.notFound().build();

        ONG ong = optionalONG.get();
        newOng.setCdOng(ong.getCdOng());
        ongRepository.save(newOng);
        return ResponseEntity.ok(newOng);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        ongRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{uf}/{city}")
    public ResponseEntity<List<ONG>> findByUfAndCity(@PathVariable String uf, @PathVariable String city) {
        List<ONG> ongs = ongRepository.findByUfAndCityIgnoreCase(uf, city);
        return ResponseEntity.ok(ongs);
    }

}
