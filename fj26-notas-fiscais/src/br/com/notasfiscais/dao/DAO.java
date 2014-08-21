package br.com.notasfiscais.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

public class DAO<T> {
	
	private final Class<T> classe;
	
	public DAO(Class<T> classe) {
		this.classe = classe;
	}
	
	public void adiciona(T t) {
		//consegue o entity manager
		EntityManager em = new JPAUtil().getEntityManager();
		
		//abre transação
		em.getTransaction().begin();
		
		//persiste objeto
		em.persist(t);
		
		//commita transação
		em.getTransaction().commit();
		
		//fecha a entity manager
		em.close();
		
	}
	
	public void remove(T t) {
		
		EntityManager em = new JPAUtil().getEntityManager();
		em.getTransaction().begin();
		
		em.remove(em.merge(t));
		
		em.getTransaction().commit();
		em.close();
		
	}
	
	public void atualiza(T t) {
		
		EntityManager em = new JPAUtil().getEntityManager();
		em.getTransaction().begin();
		
		em.merge(t);
		
		em.getTransaction().commit();
		em.close();
	}
	
	public List<T> listaTodos() {
		
		EntityManager em = new JPAUtil().getEntityManager();
		
		CriteriaQuery<T> query = em.getCriteriaBuilder().createQuery(classe);
		query.select(query.from(classe));
		
		List<T> lista = em.createQuery(query).getResultList();
		
		em.close();
		return lista;
	}
	
	public List<T> listaTodosPaginada(int inicio, int quantidade) {
		
		EntityManager em = new JPAUtil().getEntityManager();
		
		CriteriaQuery<T> query = em.getCriteriaBuilder().createQuery(classe);
		query.select(query.from(classe));
		
		
		List<T> lista = em.createQuery(query).setFirstResult(inicio).setMaxResults(quantidade).getResultList();
		
		em.close();
		return lista;
	}
	
	public int contaTodos() {
		
		EntityManager em = new JPAUtil().getEntityManager();
		
		CriteriaQuery<T> query = em.getCriteriaBuilder().createQuery(classe);
		query.select(query.from(classe));
		
		List<T> lista = em.createQuery(query).getResultList();
		
		em.close();
		return lista.size();
	}
	
	public T buscaporId(Long id) {
		EntityManager em = new JPAUtil().getEntityManager();
		return (T) em.find(classe, id);
	}
	
}
