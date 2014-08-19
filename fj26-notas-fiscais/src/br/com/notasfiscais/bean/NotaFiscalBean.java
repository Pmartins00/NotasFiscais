package br.com.notasfiscais.bean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.Item;
import br.com.notasfiscais.modelo.NotaFiscal;
import br.com.notasfiscais.modelo.Produto;

@ViewScoped
@ManagedBean(name="notaFiscalBean")
public class NotaFiscalBean {
	
	private Item item = new Item();
	private NotaFiscal notafiscal = new NotaFiscal();
	private Long idProduto;
	
	public void guardaItem() {
		
		
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		
		System.out.println(idProduto);
		Produto produto = dao.buscaporId(idProduto);
		
		System.out.println("a");
		item.setProduto(produto);
		item.setValorUnitario(produto.getPreco());
		
		notafiscal.getItens().add(item);
		item.setNotaFiscal(notafiscal);
		
		item = new Item();
		
	}
	
	public void adiciona() {
		DAO<NotaFiscal> dao = new DAO<NotaFiscal>(NotaFiscal.class);
		dao.adiciona(notafiscal);
		
		this.notafiscal = new NotaFiscal();
		this.item = new Item();
	}
	
	public Item getItem() {
		return this.item;
	}
	
	public void setItem(Item item) {
		this.item = item;
	}
	
	public NotaFiscal getNotaFiscal() {
		return this.notafiscal;
	}
	
	public String page(){
		return "notafiscal?faces-redirect=true";
	}

	public Long getIdProduto() {
		return idProduto;
	}

	public void setIdProduto(Long idProduto) {
		this.idProduto = idProduto;
	}
	

}
