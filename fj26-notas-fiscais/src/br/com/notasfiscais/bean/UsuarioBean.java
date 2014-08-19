package br.com.notasfiscais.bean;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.Usuario;

@ViewScoped
@ManagedBean(name="usuarioBean")
public class UsuarioBean {
	
	Usuario usuario = new Usuario();
	List<Usuario> usuarios;
	
	public void grava() {
		DAO<Usuario> dao = new DAO<Usuario>(Usuario.class);
		
		System.out.println(usuario.getId());
		if (this.usuario.getId() == null) {
			System.out.println("Adicionando");
			dao.adiciona(usuario);
		} else {
			System.out.println("Atualizando");
			dao.atualiza(usuario);
		}
		
		this.usuario = new Usuario();
		this.usuarios = dao.listaTodos();
	}
	
	public void remove(Usuario usuario) {
		DAO<Usuario> dao = new DAO<Usuario>(Usuario.class);
		dao.remove(usuario);
		this.usuarios = dao.listaTodos();
	}
	
	public List<Usuario> getUsuarios() {
		if (usuarios == null) {
			System.out.println("Buscando Produtos");
			usuarios = new DAO<Usuario>(Usuario.class).listaTodos();
		}
		
		return usuarios;
	}
	
	public Usuario getUsuario() {
		return this.usuario;
	}
	
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	public String page() {
		return "usuario?faces-redirect=true";
	}
	
}
