package br.com.notasfiscais.bean;

import java.util.ArrayList;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.Item;
import br.com.notasfiscais.modelo.NotaFiscal;
import br.com.notasfiscais.modelo.Produto;

@ManagedBean(name="notaFiscalBean")
@ViewScoped
public class NotaFiscalBean {
	
	private Item item = new Item();
	private NotaFiscal notaFiscal = new NotaFiscal();
	private Long idProduto;
	private ArrayList<Item> lista = new ArrayList<Item>();
	
	
	
	public void guardaItem() {
		
		
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		
		System.out.println(idProduto);
		System.out.println(item.getQuantidade());
		Produto produto = dao.buscaporId(idProduto);
		
		System.out.println(produto.getNome());
		
		this.item.setProduto(produto);
		this.item.setValorUnitario(produto.getPreco());
		
		lista.add(item);
		notaFiscal.setItens(lista);
		
		this.item.setNotaFiscal(notaFiscal);
		
		
		
		System.out.println("Tamanho: "+lista.size());
		
		this.item = new Item();
		
	}
	
	public String adiciona() {
		System.out.println("Dados da nota");
		System.out.println("CNPJ: " + notaFiscal.getCnpj());
		System.out.println("Data: " + notaFiscal.getData());
		System.out.println("itens" + notaFiscal.getItens().size());
		
		DAO<NotaFiscal> dao = new DAO<NotaFiscal>(NotaFiscal.class);
		dao.adiciona(notaFiscal);
		
		this.notaFiscal = new NotaFiscal();
		this.item = new Item();
		
		return "notafiscal?faces-redirect=true";
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

	public ArrayList<Item> getLista() {
		return lista;
	}

	public void setLista(ArrayList<Item> lista) {
		this.lista = lista;
	}

}
