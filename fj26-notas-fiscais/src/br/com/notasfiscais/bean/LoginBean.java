package br.com.notasfiscais.bean;

import javax.faces.bean.ManagedBean;
import br.com.notasfiscais.dao.UsuarioDAO;
import br.com.notasfiscais.modelo.Usuario;

@ManagedBean(name="loginBean")
public class LoginBean {
	
	Usuario usuario = new Usuario();
	
	public String autentica() {
		UsuarioDAO dao = new UsuarioDAO();
		
		boolean aut = dao.autentica(this.usuario);
		
		if (aut) {
			return "index";
		} else {
			return "login";
		}
		
	}
	
	public Usuario getUsuario() {
		return this.usuario;
	}

}
