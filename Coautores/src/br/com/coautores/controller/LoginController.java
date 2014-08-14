package br.com.coautores.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.coautores.dao.UsuarioDao;
import br.com.coautores.model.Usuario;


@Controller
@Transactional
public class LoginController {
	
	@Autowired
	UsuarioDao dao;
	
	@RequestMapping("r")
	public String teste() {
		return "resources";
	}
	
	@RequestMapping("index")
	public String acesso() {
		return "index/index";
	}
	
	@RequestMapping("loginForm")
	public String loginForm() {
	    return "login/formulario-login";
	}
	
	@RequestMapping("efetuaLogin")
	public String efetuaLogin(@Valid Usuario usuario, BindingResult result, HttpSession session) {
		
		if (result.hasFieldErrors("login")) {
			return "login/formulario-login";
		} else if (result.hasFieldErrors("senha")) {
			return "login/formulario-login";
		} else {
			System.out.println(dao.existeUsuario(usuario));
			System.out.println(usuario.getLogin());
			System.out.println(usuario.getSenha());
			
			if(dao.existeUsuario(usuario)) {

			    session.setAttribute("usuarioLogado", usuario);
			    return "redirect:index";
			}
			
			return "redirect:loginForm";
		}

	}
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		System.out.println("redirect");
	  session.invalidate();
	  return "forward:loginForm";
	}

}
