package br.com.coautores.dao;

import java.util.List;

import br.com.coautores.model.Usuario;

public interface UsuarioDao {
	
	public void salva(Usuario usuario);
	public void remove(Usuario usuario);
	public void altera(Usuario usuario);
	public Usuario buscaId(Long id);
	public List<Usuario> lista();
	public boolean existeUsuario(Usuario usuario);
	boolean existelogin(Usuario usuario);
	
}
