package br.com.coautores.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import br.com.coautores.dao.UsuarioDao;
import br.com.coautores.model.Usuario;

@Repository
public class JpaUsuario implements UsuarioDao {
	
	@PersistenceContext
	EntityManager manager;
	
	@Override
	public void salva(Usuario usuario) {
		System.out.println("Adicionando Usuario!!!!");
		manager.persist(usuario);
	}

	@Override
	public void remove(Usuario usuario) {
		System.out.println("Deletando Usuario!!!!");
		Usuario removeUsuario = buscaId(usuario.getId_usuario());
		manager.remove(removeUsuario);
	}

	@Override
	public void altera(Usuario usuario) {
		System.out.println("Alterando Usuario!!!!");
		manager.merge(usuario);
	}

	@Override
	public Usuario buscaId(Long id) {
		System.out.println("Buscando por id!!!!");
		return manager.find(Usuario.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Usuario> lista() {
		System.out.println("Listando Usuario!!!!");
		return manager.createQuery("select u from Usuario u").getResultList();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public boolean existeUsuario(Usuario usuario) {
		TypedQuery typedQuery = manager.createQuery(
		        "SELECT u FROM Usuario u WHERE u.login = :login and u.senha = :senha", Usuario.class);
		typedQuery.setParameter("login", usuario.getLogin());
		typedQuery.setParameter("senha", usuario.getSenha());
		List<Usuario> results = typedQuery.getResultList();
		
		for (Usuario r : results) {
			usuario.setId_usuario(r.getId_usuario());
			usuario.setNome_completo(r.getNome_completo());
		}
		
		return results.size() > 0 ? true : false;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public boolean existelogin(Usuario usuario) {
		TypedQuery typedQuery = manager.createQuery(
		        "SELECT u FROM Usuario u WHERE u.login = :login", Usuario.class);
		typedQuery.setParameter("login", usuario.getLogin());
		List<Usuario> results = typedQuery.getResultList();
		
		for (Usuario r : results) {
			usuario.setId_usuario(r.getId_usuario());
		}
		
		return results.size() > 0 ? true : false;
	}

}
