package br.com.notasfiscais.bean;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

import org.primefaces.model.LazyDataModel;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.datamodel.DataModelNotasFiscais;
import br.com.notasfiscais.modelo.NotaFiscal;

@RequestScoped
@ManagedBean(name="listaNotasFiscaisBean")
public class ListaNotasFiscaisBean {
	
	List<NotaFiscal> notasFiscais;
	private LazyDataModel<NotaFiscal> dataModel;
	
	public ListaNotasFiscaisBean() {
		this.dataModel = new DataModelNotasFiscais();
		
		DAO<NotaFiscal> dao = new DAO<NotaFiscal>(NotaFiscal.class);
		this.dataModel.setRowCount(dao.contaTodos());
	}
	
	public LazyDataModel<NotaFiscal> getDataModel() {
		return dataModel;
	}
	
	public List<NotaFiscal> getNotasFiscais() {
		if (notasFiscais == null) {
			System.out.println("Buscando Produtos");
			notasFiscais = new DAO<NotaFiscal>(NotaFiscal.class).listaTodos();
		}
		
		return notasFiscais;
	}
	
}
