package br.com.notasfiscais.bean;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import org.primefaces.model.LazyDataModel;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.datamodel.DataModelProduto;
import br.com.notasfiscais.modelo.Produto;

@ViewScoped
@ManagedBean(name="produtoBean")
public class ProdutoBean {
	
	private Produto produto = new Produto();
	private List<Produto> produtos;
	private LazyDataModel<Produto> dataModel;
	
	public ProdutoBean() {

		this.dataModel = new DataModelProduto();
		
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		this.dataModel.setRowCount(dao.contaTodos());
		
	}
	
	public LazyDataModel<Produto> getDataModel() {
		return dataModel;
	}
	
	public void grava() {
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		
		System.out.println(produto.getId());
		if (this.produto.getId() == null) {
			System.out.println("Adicionando");
			dao.adiciona(produto);
		} else {
			System.out.println("Atualizando");
			dao.atualiza(produto);
		}
		
		this.produto = new Produto();
		//this.produtos = dao.listaTodos();
		
		this.dataModel.setRowCount(dao.contaTodos());
		
	}
	
	public void remove(Produto produto) {
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		dao.remove(produto);
		//this.produtos = dao.listaTodos();
	
		//this.dataModel.setRowCount(dao.contaTodos());
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
	
	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
	public String page() {
		return "index?faces-redirect=true";
	}

	public void setDataModel(LazyDataModel<Produto> dataModel) {
		this.dataModel = dataModel;
	}

}
