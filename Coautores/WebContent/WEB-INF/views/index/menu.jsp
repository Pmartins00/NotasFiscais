<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
       	<li><a href="index"><span class="glyphicon glyphicon-home"></span></a></li>
  		
  		<!--  
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-list-alt"></span>&nbsp&nbsp Cadastrar <b class="caret"></b></a>
          <ul class="dropdown-menu">
          		
          		<li><a href="#" onclick="javascript:carrega_form('Hardware');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-hdd"></span>&nbsp&nbsp Cadastrar Hardware</a></li>
          		<li><a href="#" onclick="javascript:carrega_form('Empresa');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-briefcase"></span>&nbsp&nbsp Cadastrar Empresa</a></li>
	          	<li><a href="#" onclick="javascript:carrega_form('Usuario');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-user"></span>&nbsp&nbsp Cadastrar Usuário</a></li>
	          	
	          	<li class="divider"></li>
	          	<li class="dropdown-submenu">
				    <a tabindex="-1" href="#">Software</a>
				    <ul class="dropdown-menu">
				      	<li><a href="#" onclick="javascript:carrega_form('Software');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-flag"></span>&nbsp&nbsp Cadastrar Software</a></li>
           				<li><a href="#" onclick="javascript:carrega_form('Licenca');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-folder-open"></span>&nbsp&nbsp Cadastrar Licenças</a></li>
				    </ul>
				</li>
				
	          	<li class="divider"></li>
	          	
	          	<li class="dropdown-submenu">
				    <a tabindex="-1" href="#">Ocorrências</a>
				    <ul class="dropdown-menu">
				      	<li><a href="#" onclick="javascript:carrega_form('Ocorrencia');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-remove-sign"></span>&nbsp&nbsp Cadastrar Ocorrencia</a></li>
			            <li><a href="#" onclick="javascript:carrega_form('Indicador');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-info-sign"></span>&nbsp&nbsp Cadastrar Indicador</a></li>
			            <li><a href="#" onclick="javascript:carrega_form('Catalogo');" data-toggle="modal" data-target="#Modal1"><span class="glyphicon glyphicon-book"></span>&nbsp&nbsp Cadastrar Catalogo</a></li>
				    </ul>
				</li>
			  
          </ul>
        </li>
        -->
        
         <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-th-list"></span>&nbsp&nbsp Manter <b class="caret"></b></a>
          <ul class="dropdown-menu">
          	<li><a href="manter_usuario"><span class="glyphicon glyphicon-user"></span>&nbsp&nbsp Manter Usuários</a></li>
          	
          	<li class="divider"></li>
          	
	        <li class="dropdown-submenu">
			    <a tabindex="-1" href="#">Software</a>
			    <ul class="dropdown-menu">
			      	<li><a href="#"><span class="glyphicon glyphicon-hand-up"></span>&nbsp&nbsp Atribuir Licenças</a></li>
		            <li><a href="#"><span class="glyphicon glyphicon-search"></span>&nbsp&nbsp Consultar Licenças</a></li>
		            <li><a href="#"><span class="glyphicon glyphicon-info-sign"></span>&nbsp&nbsp Situação Auditoria</a></li>
			    </ul>
			</li>
			
			<li class="divider"></li>
			
			<li class="dropdown-submenu">
			    <a tabindex="-1" href="#">Ocorrências</a>
			    <ul class="dropdown-menu">
			      	<li><a href="#"><span class="glyphicon glyphicon-remove-sign"></span>&nbsp&nbsp Manter Ocorrencias</a></li>
		            <li><a href="manter_indicador"><span class="glyphicon glyphicon-info-sign"></span>&nbsp&nbsp Manter Indicadores</a></li>
		            <li><a href="manter_catalogo"><span class="glyphicon glyphicon-book"></span>&nbsp&nbsp Manter Catalogos</a></li>
			    </ul>
			</li>
			
          </ul>
        </li>
        
        <li><a href="buscar_arquivos"><span class="glyphicon glyphicon-file"></span> Arquivos</a></li>
      
      </ul>
		
		<div class="dropdown col-md-1 navbar-btn col-md-offset-7">
		  <a class="btn btn-default" id="dLabel" role="button" data-toggle="dropdown" data-target="#">
		    <span class="glyphicon glyphicon-cog"></span> &nbspOpções&nbsp <span class="caret"></span>
		  </a>
		
		
		  <ul class="dropdown-menu" role="menu">
		    <li><a class="btn" title="sair" onclick="javascript:sair();"><span class="glyphicon glyphicon-share-alt"></span>&nbsp&nbsp Sair</a></li>
		  </ul>
		</div>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>