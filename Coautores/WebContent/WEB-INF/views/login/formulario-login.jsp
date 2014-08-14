<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Acesso ao cadastro de Ocorrências</title>

	<link href="resources/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
       <script src="resources/dist/js/html5shiv.js"></script>
      <script src="resources/dist/js/respond.min.js"></script>
    <![endif]-->
    
    <style type="text/css">
    	
    	body {
    		background-color: ;
    	}
    
    	fieldset {
			margin-top: 20px;
			border: 1px solid #CCC;
			padding: 10px;
			border-radius: 10px;
		}
		
		h1, img {
			text-align: center;
			margin-top: 50px;
		}
		
		.b1 {
			text-align: center;
		}
		
		#ret {
			margin-top: 10px;
		}
		
    </style>
</head>
<body>
	
	<div class="row">
		<div class="container">
			<h1>Acesso ao sistema de cadastro de ocorrências</h1>
			
			<div class="col-md-3">
				<img alt="Weg Cestari" src="resources/imagens/weg.jpg" width="250" height="100" />
			</div>
			
			<form action="efetuaLogin" method="post" id="form_login" name="form_login" class="form col-md-6" onsubmit="return valida(login);">
				<fieldset>
					<div class="form-group col-md-12">
					    <label for="user" class="col-md-2">Login</label><form:errors path="usuario.login" cssStyle="color:red"></form:errors>
					    <input type="text" class="form-control" id="login" name="login" placeholder="usuário" />
				  	</div>
				  	
				  	<div class="form-group col-md-12">
					    <label for="senha" class="col-md-2">Senha</label><form:errors path="usuario.senha" cssStyle="color:red"></form:errors>
					    <input type="password" class="form-control" id="senha" name="senha" placeholder="******" />
				  	</div>
				  	
				  	<div class="form-group col-md-12 b1">
				  		<input class="btn btn-default" type="submit" value="Entrar" />
				  	</div>
				  	
			  	</fieldset>
			</form>
			
			<div class="col-md-2">
				<img id="aut" alt="Automotiva Cestari" src="resources/imagens/automotiva.jpg" width="250" height="100" />
			</div>
			
			<div id="ret" class="col-md-offset-3 col-md-6">
			
			</div>
			
		</div>
	</div>
	
</body>

<script type="text/javascript" src="resources/js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="resources/dist/js/bootstrap.js"></script>

<script type="text/javascript">
    
		$( document ).ready(function() {
    		$("#login").focus();
    	});
    
    	function valida(f) {
    		if (f.user.value == "") {
    			alert("Preencha o campo usuário!");
    			f.user.focus();
    			return false;
    		} else if (f.senha.value == "") {
    			alert("Preencha o campo senha!");
    			f.senha.focus();
    			return false;
    		} else {
    			
    			return true;
    			
    		}
    	}
    
    </script>

</html>