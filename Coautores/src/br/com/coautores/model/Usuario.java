package br.com.coautores.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue
	private Long id_usuario;
	
	@NotNull(message="{usuario.login.null}")
	@Size(min=5, message="{usuario.login.size}")
	@Column(unique=true, nullable=false)
	private String login;
	
	@NotNull(message="{usuario.senha.null}")
	@Size(min=5, message="{usuario.senha.size}")
	private String senha;
	
	@Size(min=5)
	private String nome_completo;
	
	@Size(min=5)
	private String email;

	private String cx_representante;
	
	//List<Companhia> comapnhia;
	
	public Long getId_usuario() {
		return id_usuario;
	}
	
	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}
	
	public String getLogin() {
		return login;
	}
	
	public void setLogin(String login) {
		this.login = login;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNome_completo() {
		return nome_completo;
	}

	public void setNome_completo(String nome_completo) {
		this.nome_completo = nome_completo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCx_representante() {
		return cx_representante;
	}

	public void setCx_representante(String cx_representante) {
		this.cx_representante = cx_representante;
	}
}
