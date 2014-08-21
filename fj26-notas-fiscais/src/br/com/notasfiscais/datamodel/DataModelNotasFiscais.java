package br.com.notasfiscais.datamodel;

import java.util.List;
import java.util.Map;

import org.primefaces.model.LazyDataModel;
import org.primefaces.model.SortOrder;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.NotaFiscal;

public class DataModelNotasFiscais extends LazyDataModel<NotaFiscal> {
	
	public List<NotaFiscal> load (int inicio, int quantidade, String campoOrdenacao, SortOrder sentidoOrdenacao, Map<String,Object> filtros) {
		
		DAO<NotaFiscal> dao = new DAO<NotaFiscal>(NotaFiscal.class);
		return dao.listaTodosPaginada(inicio, quantidade);
		
	}
	
}
