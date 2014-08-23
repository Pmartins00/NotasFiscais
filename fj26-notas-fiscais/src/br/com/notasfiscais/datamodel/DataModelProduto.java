package br.com.notasfiscais.datamodel;

import java.util.List;
import java.util.Map;

import org.primefaces.model.LazyDataModel;
import org.primefaces.model.SortOrder;

import br.com.notasfiscais.dao.DAO;
import br.com.notasfiscais.modelo.Produto;;

public class DataModelProduto extends LazyDataModel<Produto> {
	
public List<Produto> load (int inicio, int quantidade, String campoOrdenacao, SortOrder sentidoOrdenacao, Map<String,Object> filtros) {
		
		DAO<Produto> dao = new DAO<Produto>(Produto.class);
		return dao.listaTodosPaginada(inicio, quantidade);
		
	}

}
