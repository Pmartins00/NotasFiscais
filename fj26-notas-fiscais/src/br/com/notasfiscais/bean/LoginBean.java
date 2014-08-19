package br.com.notasfiscais.bean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

import br.com.notasfiscais.dao.UsuarioDAO;
import br.com.notasfiscais.modelo.Usuario;

@SessionScoped
@ManagedBean(name="loginBean")
public class LoginBean {
	
	Usuario usuario = new Usuario();
	
	public String autentica() {
		UsuarioDAO dao = new UsuarioDAO();
		
		boolean aut = dao.autentica(this.usuario);
		
		if (aut) {
			return "index?faces-redirect=true";
		} else {
			return "login?faces-redirect=true";
		}
		
	}
	
	public Usuario getUsuario() {
		return this.usuario;
	}
	
	public boolean isLogado() {
		return this.usuario.getLogin() != null;
	}
	
	public String logout() {
		FacesContext.getCurrentInstance().getExternalContext().invalidateSession();
		return "login?faces-redirect=true";
	}

}
