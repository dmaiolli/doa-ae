package br.com.fiap.doaae.api.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "TB_ONG")
@Data
@SequenceGenerator(name = "ong", sequenceName = "SQ_ONG", initialValue = 1, allocationSize = 1)
public class ONG {

    @Id
    @Column
    @GeneratedValue(generator = "ong", strategy = GenerationType.SEQUENCE)
    private Long cdOng;
    private String name;
    private String description;
    private String email;
    private String whatsapp;
    private String cnpj;
    private String uf;
    private String city;
    private String number;
    private String street;
}
