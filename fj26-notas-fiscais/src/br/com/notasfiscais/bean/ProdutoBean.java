package br.com.notasfiscais.bean;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.Produto;

@ViewScoped
@ManagedBean
public class ProdutoBean {
	
	private Produto produto = new Produto();
	private List<Produto> produtos;
	
	public void grava() {
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		dao.adiciona(produto);
		this.produto = new Produto();
		this.produtos = dao.listaTodos();
	}
	
	public void remove(Produto produto) {
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		dao.remove(produto);
		this.produtos = dao.listaTodos();
	}
	
	public List<Produto> getProdutos() {
		if (produtos == null) {
			System.out.println("Buscando Produtos");
			produtos = new DAO<Produto>(Produto.class).listaTodos();
		}
		
		return produtos;
	}
	
	public Produto getProduto() {
		return this.produto;
	}

}
