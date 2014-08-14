// Variavel para manutenção de Centro de Custo.
var c_m;
var senha_recebida;

$( document ).ready(function() {
	$("#data_oco").focus();
	$('#btn_cia').html("");
});

function manter_arquivos(f) {
	
	if (f.caminho.value == "") {
		
		alert("Preencha o campo caminho!!");
		f.caminho.focus();
		
	} else if (f.mover.value == "") {
		
		alert("Preencha o campo mover para!!")
		f.mover.focus();
		
	} else if (f.tamanho.value == "") {
		
		alert("Preencha o campo tamanho!!");
		f.tamanho.focus();
		
	} else if (f.tempo.value == "") {
		
		alert("Preencha o campo tempo!!");
		f.tempo.focus();
		
	} else {
		
		$( document ).ready(function() {
			
			var formdata = $("#form_arquivos").serialize();
			
			$("#resposta").html('<center><img alt="Ajax" src="resources/imagens/ajax-loader.gif"></center>');
			
			$.ajax({
				url: "manter_arquivos",
				data: formdata,
				type: 'POST',
				context: jQuery('#resposta'),
				success: function(data){
				
					if(data.retorno == "s") {
						retorno = "<div class='alert alert-success'>"+data.mensagem+"</div>";
					} else {
						retorno = "<div class='alert alert-danger'>"+data.mensagem+"</div>";
					}
					
					this.html(retorno);
				}
			});
		});
		
	}
	
	return false;
}

//Carrega formulários
function carrega_form(f) {
	
	$( document ).ready(function() {
		
		$("#modal_titulo").html("<h2>Adicionar "+f+"</h2>");
		$("#modal_corpo").html('<center><img alt="Ajax" src="resources/imagens/ajax-loader.gif"></center>');
		carrega('modal_corpo', f.toLowerCase());
		$("#modal_footer").html("");
		
	});
	
}


// função carrega() -> Recebe dois parâmetros param: Onde o conteúdo retornado será exibido e caminho: página que será carregada via ajax.
function carrega(param, caminho, f) {
	
	$( document ).ready(function() {
		$("#"+param).html('<center><img alt="Ajax" src="resources/imagens/ajax-loader.gif"></center>');
        $.ajax({
            
            url: "resources/ajax/"+caminho+".jsp",
            type: 'POST',
            context: jQuery('#'+param),
            success: function(data){
                this.html(data);
            },
            complete: function(){
            	if(caminho == "indicador") {
            		indicador_ret(f);
            	} else if(caminho == "usuario_alterar") {
            		usuario_ret(f);
            	} else if (caminho == "catalogo") {
            		catalogo_ret(f);
            	}
            }
        
        }); 
	});
	
}

// função habilita() -> Habilita botão de Centro de Custo quando apenas uma das duas companhias estiver selecionada.
function habilita() {
	
	var selecionado = $("#companhia option:selected").val();
	
	$( document ).ready(function() {
		if (selecionado == "0") {
			$('#btn_cia').html("");
			$("#modal_titulo2").html('');
			$("#modal_corpo2").html('');
			$("#modal_footer2").html('');
			c_m = selecionado;
		} else if (selecionado == "1") {
			$('#btn_cia').html("");
			$("#modal_titulo2").html('');
			$("#modal_corpo2").html('');
			$("#modal_footer2").html('');
			c_m = selecionado;
		} else if (selecionado == "200") {
			$('#btn_cia').html('<span class="glyphicon glyphicon-plus" data-toggle="modal" data-target="#Modal2"></span>');
			$("#modal_titulo2").html('');
			$("#modal_corpo2").html('');
			$("#modal_footer2").html('');
		} else if (selecionado == "600") {
			$('#btn_cia').html('<span class="glyphicon glyphicon-plus" data-toggle="modal" data-target="#Modal2"></span>');
			$("#modal_titulo2").html('');
			$("#modal_corpo2").html('');
			$("#modal_footer2").html('');
		}
	});
	
}

// função copanhia() -> Envia a companhia e retorna todos os centro de custo da mesma no modal2.
function companhia() {
	
	$( document ).ready(function() {
		
		if (c_m != $("#companhia option:selected").val()) {
			$("#modal_titulo2").html("<h2>Adicionar Centro de Custo</h2>");
			$("#modal_corpo2").html('<center><img alt="Ajax" src="imagens/ajax-loader.gif"></center>');
		
			$( document ).ready(function() {
				c_m = $("#companhia option:selected").val();
				$("#modal_corpo2").html('<center><img alt="Ajax" src="imagens/ajax-loader.gif"></center>');
		        $.ajax({
		            
		            url: "ajax/modal-companhia.jsp",
		            data: "cia="+$("#companhia option:selected").val(),
		            type: 'POST',
		            context: jQuery('#modal_corpo2'),
		            success: function(data){
		                this.html(data);
		            }
	
		        }); 
			});
		
			$("#modal_footer2").html("<button type='button' class='btn btn-default' data-dismiss='modal'>Fechar</button>");
		}
	});
}



// Função Helpdesk()-> busca se o helpdesk digitado se refere a ocorrência que será inserida.
function helpdesk() {
	var id = $("#id_helpdesk").val();
	if (id == "") {
		alert("Insira um código de Helpdesk!");
		$("#id_helpdesk").focus();
		return false;
	} else {
		$( document ).ready(function() {
				
				$.ajax({
					url: "mvc?logica=RetornaHelpdesk",
					data: 'id='+id,
					type: 'POST',
					context: jQuery(''),
					success: function(data){
						$("#descricao_sol").val(data.retorno);
					}
				});
		});
		
	}
}

// Função salvar()-> Válida todos os campos do formulário e se tiver tudo Ok envia para a servlet responsavel por inserir a ocorrência.
function salvar() {
	$( document ).ready(function() {
		
		if (!valida_data(document.getElementById("data_oco"))) {
			alert("Data ocorrencia inicio incorreta!");
			$("#data_oco").val("");
			$("#data_oco").focus();
			return false;
		} else if (!valida_hora(document.getElementById("inicio"))) {
			alert("Hora ínicio inválida!");
			$("#inicio").val("");
			$("#inicio").focus();
			return false;
		} else if (!valida_data(document.getElementById("data_fim"))) {
			alert("Data ocorrencia término incorreta!");
			$("#data_fim").val("");
			$("#data_fim").focus();
			return false;
		} else if (!valida_hora(document.getElementById("fim"))) {
			alert("Hora término inválida!");
			$("#fim").val("");
			$("#fim").focus();
			return false;
		} else if ($("#indicador option:selected").val() == "0") {
			alert("Escolha um indicador!");
			$("#indicador").focus();
			return false;
		} else if ($("#tipo option:selected").val() == "0") {
			alert("Escolha um tipo de ocorrência!");
			$("#tipo").focus();
			return false;
		} else if ($("#companhia option:selected").val() == "0") {
			alert("Escolha uma companhia!");
			$("#companhia").focus();
			return false;
		} else if (!valida_checkbox()) {
			alert("Escolha pelo menos um centro de custo!");
			$("#companhia").focus();
			return false;
		} else if ($("#descricao").val() == "") {
			alert("Informe a descrição da ocorrência!");
			$("#descricao").focus();
			return false;
		} else if (($("#id_helpdesk").val() == "") || (($("#descricao_sol").val() == ""))) {
			alert("Selecione um helpdesk!");
			$("#id_helpdesk").focus();
			return false;
		} else {
			camposMarcados = new Array();
			$("input[type=checkbox][name='grupo[]']:checked").each(function(){
			    camposMarcados.push($(this).val());
			});
			
			$.ajax({
				
	            url: "mvc?logica=AdicionaOcorrencia",
	            data: "indicador="+$("#indicador option:selected").val()+"&tipo="+$("#tipo option:selected").val()+
	            "&companhia="+$("#companhia option:selected").val()+"&cc="+camposMarcados+"&usuario="+$("#id_user").val()+
	            "&validar_horas="+$('#validar_horas').is(':checked')+"&data_oco="+$("#data_oco").val()+
	            "&inicio="+$("#inicio").val()+"&data_fim="+$("#data_fim").val()+"&programado="+$('#programado').is(':checked')+
	            "&fim="+$("#fim").val()+"&descricao="+$("#descricao").val()+"&id_helpdesk="+$("#id_helpdesk").val(),
	            type: 'POST',
	            dataType: "json",
	            success: function(data){
	            	
	            	$("#modal_titulo").html("<h2>Salvar Ocorrência</h2>");
	            	$("#modal_corpo").html("");
	            	$("#modal_footer").html('<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');
	            	
	            	$("#Modal1").modal("show");
	            	
	            	if (data.resposta == "s") {
	            		$("#modal_corpo").html('<div class="alert alert-success">'+data.mensagem+'</div>');
	            		carrega('novo_oco', 'novo_oco');
	            	} else {
	            		$("#modal_corpo").html('<div class="alert alert-danger">'+data.mensagem+'</div>');
	            		$("#id_oco").val(parseInt($("#id_oco").val())+1);
	            	}
	            }
	
	        }); 
		}
	});
}

//Função limpar()-> limpa todos os campos dor formulario de ocorrência.
function limpar() {
	$( document ).ready(function() { 
		$("#indicador").val("0");
		$("#tipo").val("0");
		$("#companhia").val("0");
		$('#validar_horas').prop('checked', false);
		$("#data_oco").val("DD/MM/AAAA");
		$("#data_fim").val("DD/MM/AAAA");
		$("#inicio").val("00:00");
		$("#fim").val("00:00");
		$("#descricao").val("");
		$("#id_helpdesk").val("");
		$("#descricao_sol").val("");
		$(":checkbox[name*=grupo]").each(function() { this.checked = false; });
		$('#btn_cia').html("");
		c_m = "0";
	});
}

// Função responsavel por salvar o indicador e envia-lo para lista de indicadores.
function salvar_indicador(f) {
	
	var descricao = f.descricao.value;
	var retorno;
	var formdata = $("#form_indicador").serialize();
	
	if (descricao == "") {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo descrição corretamente!</div>");
		$("#descricao").focus();
		return false;
	} else {
		
		$("#modal_footer").html('<center><img alt="Ajax" src="resources/imagens/loader-bar.gif"></center>');
		$( document ).ready(function() {
			
			$.ajax({
				url: "salva_indicador",
				data: formdata+"&altera="+$("#id_indicador").val(),
				type: 'POST',
				context: jQuery('#modal_footer'),
				success: function(data){
				
					if(data.retorno == "s") {
						if ($("#id_indicador").val() == "") {
							retorno = "<div class='alert alert-success'>Indicador inserido com sucesso!</div>";
							$("#descricao").val("");
							$("#descricao").focus();
						} else {
							retorno = "<div class='alert alert-success'>Indicador aletrado com sucesso!</div>";
							window.setInterval((function() { location.href="manter_indicador"; }), 300);
						}
						
					} else {
						retorno = "<div class='alert alert-danger'>"+data.mensagem+"</div>";
					}
					
					this.html(retorno);
				}
			});
		});
		
		return false;
	}
	
}

function alterar_indicador(f) {
	
	$( document ).ready(function() {
		
		$("#modal_titulo").html("<h2>Alterar Indicador</h2>");
		$("#modal_corpo").html('<center><img alt="Ajax" src="resources/imagens/ajax-loader.gif"></center>');
		carrega('modal_corpo', 'indicador', f);
		$("#modal_footer").html("");
		
	});
	
}

function indicador_ret(f) {
$( document ).ready(function() {

		$.ajax({
			url: "alterar_indicador",
			data: 'id_indicador='+f,
			type: 'POST',
			success: function(data){
				$("#id_indicador").val(data.id_indicador);
				$("#descricao").val(data.descricao);
			}
		});
		
	});
}

//---- Alterado ---///
function salvar_usuario(f) {
	
	f.nome_completo.style.borderColor="#BEBEBE"; 
	f.login.style.borderColor="#BEBEBE";
	f.email.style.borderColor="#BEBEBE"; 
	f.senha.style.borderColor="#BEBEBE";
	f.conf_senha.style.borderColor="#BEBEBE";
	f.companhia.style.borderColor="#BEBEBE"; 
	
	var login = f.login.value;
	var senha = f.senha.value;
	var conf_senha = f.conf_senha.value;
	var nome_completo = f.nome_completo.value;
	var email = f.email.value;
	var companhia = f.companhia.value;
	var retorno;
	
	var formdata = $("#form_usuario").serialize();
	
	$("#modal_titulo").html("<h2>Salvar Usuário</h2>");
	
	if (nome_completo == "") {
		$("#modal_corpo").html("<div class='alert alert-danger'>Preencha campo nome completo corretamente!</div>");
		f.nome_completo.style.borderColor="#E81300"; 
		return false;
	} else if (login == "") {
		$("#modal_corpo").html("<div class='alert alert-danger'>Preencha campo login corretamente!</div>");
		f.login.style.borderColor="#E81300"; 
		return false;
	} else if (email == "") {
		$("#modal_corpo").html("<div class='alert alert-danger'>Preencha campo email corretamente!</div>");
		f.email.style.borderColor="#E81300"; 
		return false;
	} else if (senha == "") {
		$("#modal_corpo").html("<div class='alert alert-danger'>Preencha campo senha corretamente!</div>");
		f.senha.style.borderColor="#E81300"; 
		return false;
	} else if (conf_senha == "") {
		$("#modal_corpo").html("<div class='alert alert-danger'>Preencha campo confirme senha corretamente!</div>");
		f.conf_senha.style.borderColor="#E81300"; 
		return false;
	} else if (senha != conf_senha) {
		$("#modal_corpo").html("<div class='alert alert-danger'>As senhas não conferem</div>");
		f.senha.style.borderColor="#E81300";
		f.conf_senha.style.borderColor="#E81300";
		f.senha.value = "";
		f.conf_senha.value = "";
		return false;
	} else if (companhia == "0") {
		$("#modal_corpo").html("<div class='alert alert-danger'>Preencha campo companhia corretamente!</div>");
		f.companhia.style.borderColor="#E81300"; 
		return false;
	} else {
	
		$("#modal_corpo").html('<center><img alt="Ajax" src="resources/imagens/loader-bar.gif"></center>');
		$( document ).ready(function() {
			
			$.ajax({
				url: "salva_usuario",
				data: formdata,
				type: 'POST',
				context: jQuery('#modal_corpo'),
				success: function(data){
				
					if(data.retorno == "s") {
						if ($("#id_usuario").val() == "") {
							retorno = "<div class='alert alert-success'>Usuário inserido com sucesso!</div>";
							$("#nome_completo").val("");
							$("#login").val("");
							$("#email").val("");
							$("#senha").val("");
							$("#conf_senha").val("");
							$("#cx_representante").val("");
							$("#companhia").val("");
						} else {
							retorno = "<div class='alert alert-success'>Usuário aletrado com sucesso!</div>";
							window.setInterval((function() { location.href="manter_usuario"; }), 300);
						}
						
					} else {
						retorno = "<div class='alert alert-danger'>"+data.mensagem+"</div>";
					}
					
					this.html(retorno);
				}
			});
		});

		return false;
	}
	
}

function salvar_usuario_alterar(f) {
	var login = f.login.value;
	var senha_antiga = f.senha_antiga.value;
	var senha = f.senha.value;
	var conf_senha = f.conf_senha.value;
	var retorno;
	var formdata = $("#form_usuario").serialize();
	
	if (login == "") {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo login corretamente!</div>");
		f.login.focus();
		return false;
	} else if (senha_antiga == "") {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo senha antiga corretamente!</div>");
		f.senha_antiga.focus();
		return false;
	} else if (senha_antiga != senha_recebida) {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo senha antiga corretamente!</div>");
		f.senha_antiga.focus();
		return false;
	} else if (senha == "") {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo nova senha corretamente!</div>");
		f.senha.focus();
		return false;
	} else if (conf_senha == "") {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo confirme nova senha corretamente!</div>");
		f.conf_senha.focus();
		return false;
	} else if (senha != conf_senha) {
		$("#modal_footer").html("<div class='alert alert-danger'>As senhas não conferem</div>");
		f.senha.focus();
		f.senha.value = "";
		f.conf_senha.value = "";
		return false;
	} else {
	
		$("#modal_footer").html('<center><img alt="Ajax" src="resources/imagens/loader-bar.gif"></center>');
		$( document ).ready(function() {
			
			$.ajax({
				url: "salva_usuario_alterado",
				data: formdata+"&id_usuario="+$("#id_usuario").val(),
				type: 'POST',
				context: jQuery('#modal_footer'),
				success: function(data){
				
					if(data.retorno == "s") {
						if (!$("#id_usuario").val() == "") {
							retorno = "<div class='alert alert-success'>"+data.mensagem+"</div>";
							window.setInterval((function() { location.href="loginForm"; }), 500);
						} else {
							retorno = "<div class='alert alert-success'>data.mensagem</div>";
							window.setInterval((function() { location.href="manter_usuario"; }), 300);
						}
						
					} else {
						retorno = "<div class='alert alert-danger'>"+data.mensagem+"</div>";
					}
					
					this.html(retorno);
				}
			});
		});

		return false;
	}
}

function alterar_usuario(f) {
	
	$( document ).ready(function() {
		
		$("#modal_titulo").html("<h2>Alterar Usuário</h2>");
		$("#modal_corpo").html('<center><img alt="Ajax" src="resources/imagens/ajax-loader.gif"></center>');
		carrega('modal_corpo', 'usuario_alterar', f);
		$("#modal_footer").html("");
		
	});
	
}

function usuario_ret(f) {
	
	$( document ).ready(function() {
		
		$.ajax({
			url: "alterar_usuario",
			data: 'id_usuario='+f,
			type: 'POST',
			success: function(data){
				$("#id_usuario").val(data.id_usuario);
				$("#login").val(data.login);
				senha_recebida = data.senha;
			}
		});
		
	});
}

// Função responsavel por salvar os catalogos e envia-lo para lista de catalogos.
function salvar_catalogo(f) {
	
	var descricao = f.descricao.value;
	var retorno;
	var formdata = $("#form_catalogo").serialize();
	
	if (descricao == "") {
		$("#modal_footer").html("<div class='alert alert-danger'>Preencha campo descrição corretamente!</div>");
		$("#descricao").focus();
		return false;
	} else {
		
		$("#modal_footer").html('<center><img alt="Ajax" src="resources/imagens/loader-bar.gif"></center>');
		$( document ).ready(function() {
			
			$.ajax({
				url: "salva_catalogo",
				data: formdata+"&altera="+$("#id_catalogo").val(),
				type: 'POST',
				context: jQuery('#modal_footer'),
				success: function(data){
				
					if(data.retorno == "s") {
						if ($("#id_catalogo").val() == "") {
							retorno = "<div class='alert alert-success'>Catalogo inserido com sucesso!</div>";
							$("#descricao").val("");
							$("#descricao").focus();
						} else {
							retorno = "<div class='alert alert-success'>Catalogo aletrado com sucesso!</div>";
							window.setInterval((function() { location.href="manter_catalogo"; }), 300);
						}
					} else {
						retorno = "<div class='alert alert-danger'>"+data.mensagem+"</div>";
					}
					
					this.html(retorno);
				}
			});
		});
		
		return false;
	}
	
}

function alterar_catalogo(f) {
	
	$( document ).ready(function() {
		
		$("#modal_titulo").html("<h2>Alterar Catalogo</h2>");
		$("#modal_corpo").html('<center><img alt="Ajax" src="resources/imagens/ajax-loader.gif"></center>');
		carrega('modal_corpo', 'catalogo', f);
		$("#modal_footer").html("");
		
	});
	
}

function catalogo_ret(f) {
	
	$( document ).ready(function() {
		
		$.ajax({
			url: "alterar_catalogo",
			data: 'id_catalogo='+f,
			type: 'POST',
			success: function(data){
				$("#id_catalogo").val(data.id_catalogo);
				$("#descricao").val(data.descricao);
			}
		});
		
	});
	
}

// Função mascara para data.
function limpa_data(d){
	if(d.value == 'DD/MM/AAAA'){
		d.value = '';
	}
}

//Função mascara para data.
function mascara_data(d){
	if(d.value == ''){
	d.value = 'DD/MM/AAAA';
	}
}

//Funçãoque válida data digitada.
function valida_data(campo) {
    var date=campo.value;
    var ardt=new Array;
    var ExpReg=new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
    ardt=date.split("/");
    erro=false;
    if ( date.search(ExpReg)==-1){
        erro = true;
    }
    else if (((ardt[1]==4)||(ardt[1]==6)||(ardt[1]==9)||(ardt[1]==11))&&(ardt[0]>30))
        erro = true;
    else if ( ardt[1]==2) {
        if ((ardt[0]>28)&&((ardt[2]%4)!=0))
            erro = true;
        if ((ardt[0]>29)&&((ardt[2]%4)==0))
            erro = true;
    }
    if (erro) {
        campo.value = "";
        return false;
    }
    return true;
}

//Função mascara para hora.
function limpa_hora(d){
	if(d.value == '00:00'){
		d.value = '';
	}
}

//Função mascara para hora.
function mascara_hora(d){
	if(d.value == ''){
	d.value = '00:00';
	}
}

//Função para validar hora.
function valida_hora(campo) { 
	//alert(campo.value);
	hrs = (campo.value.substring(0,2));  
	min = (campo.value.substring(3,5));  
	estado = "";
	
	if ((hrs < 00 ) || (hrs > 23) || ( min < 00) ||( min > 59)){  
		estado = "errada";  
	} else if (campo.value == "") {  
		estado = "errada";  
	} else if (campo.value == "00:00") {  
		estado = "errada";  
	} else if (hrs.length < 2) {
		estado = "errada";
	}else if (min.length < 2) {
		estado = "errada";
	} 
	
	if (estado == "errada") {  
		return false;  
	}
	
	return true;
}

// Função para validar checkbox.
function valida_checkbox() {
	if (($("#companhia option:selected").val() == "200") || ($("#companhia option:selected").val() == "600")) {
		if (jQuery("input[name='grupo[]']:checked").length > 0) {
			return true;
		} else {
			return false;
		}
	}
	return true;
}

// função para selecionar ou deselecionar todos os checkboxs de Centro de Custo.
function v(f) {
	
	if (f == 's') {
		$(":checkbox[name*=grupo]").each(function() { this.checked = true; });
	} else if('n') {
		$(":checkbox[name*=grupo]").each(function() { this.checked = false; });
	}
	
}

function sair() {
	
	$.ajax({
		url: "logout",
		type: 'POST',
		success: function(data){
			//if (data.mensagem == "s") {
				$("#modal_titulo").html("<h2>Sair</h2>");
            	$("#modal_corpo").html("<div class='alert alert-success'><strong>Saindo do sistema!</strong></div>");
            	$("#modal_footer").html('<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');
            	$("#Modal1").modal("show");
            	window.setTimeout(function() { location.href="loginForm"; }, 800);
			//}
		}
	});
}