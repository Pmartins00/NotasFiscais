package br.com.notasfiscais.bean;

import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.Item;
import br.com.notasfiscais.modelo.NotaFiscal;
import br.com.notasfiscais.modelo.Produto;

@ManagedBean(name="notaFiscalBean")
@ViewScoped
public class NotaFiscalBean implements Serializable {
	
	private Item item = new Item();
	private NotaFiscal notaFiscal = new NotaFiscal();
	private Long idProduto;
	
	public void guardaItem() {
		
		
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		
		System.out.println(idProduto);
		System.out.println(item.getQuantidade());
		Produto produto = dao.buscaporId(idProduto);
		
		System.out.println(produto.getNome());
		
		this.item.setProduto(produto);
		this.item.setValorUnitario(produto.getPreco());
		
		this.item.setNotaFiscal(notaFiscal);
		this.notaFiscal.getItens().add(item);
		
		this.item = new Item();
		
	}
	
	public void atribui() {
		System.out.println("atribui");
	}
	
	public void adiciona() {
		DAO<NotaFiscal> dao = new DAO<NotaFiscal>(NotaFiscal.class);
		dao.adiciona(notaFiscal);
		
		this.notaFiscal = new NotaFiscal();
		this.item = new Item();
	}
	
	
	public String page(){
		return "notafiscal?faces-redirect=true";
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public NotaFiscal getNotaFiscal() {
		return notaFiscal;
	}

	public void setNotaFiscal(NotaFiscal notaFiscal) {
		this.notaFiscal = notaFiscal;
	}

	public Long getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(Long idProduto) {
		this.idProduto = idProduto;
	}
	
	

}
