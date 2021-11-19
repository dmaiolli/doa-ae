package br.com.fiap.doaae.repository;

import br.com.fiap.doaae.api.model.ONG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OngRepository extends JpaRepository<ONG, Long> {
    Optional<ONG> getByCdOng(Long id);

    List<ONG> findByUfAndCityIgnoreCase(String uf, String city);
}
