<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="br.com.coautores.model.Usuario" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
 
Usuario u = (Usuario) session.getAttribute("usuarioLogado");
 
if(u == null) response.sendRedirect("ajax/login.jsp");
 
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Ocorrências</title>

	<link href="resources/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/app.css" rel="stylesheet" type="text/css" />
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
       <script src="resources/dist/js/html5shiv.js"></script>
      <script src="resources/dist/js/respond.min.js"></script>
    <![endif]-->
    
 
</head>
<body>

<div id="header">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<br />
			</div>
		</div>
	</div>
</div>

<div id="menu">
	<div class="container">

		<input type="hidden" id="id_user" value="<%= u.getId_usuario() %>" />
		
		<c:import url="menu.jsp"></c:import>
		
	</div>
</div>

<br />

<div id="section1">
	<div class="container">
		<div class="row">
			
			<span class="">
				Bem vindo: <%= u.getLogin() %>
			</span>
			
		</div>
	</div>
</div>

<div id="footer">
	<div class="container">
		<div class="row">
			
		</div>
	</div>
</div>

<!-- Modal -->
<div class="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="modal_titulo">
        
      </div>
      <div class="modal-body" id="modal_corpo">
        
      </div>
      <div class="modal-footer" id="modal_footer">
        
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

</body>

<script type="text/javascript" src="resources/js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="resources/dist/js/bootstrap.js"></script>
<script type="text/javascript" src="resources/js/app.js"></script>

</html>