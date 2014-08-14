function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
    
/*Funçao que Executa os objetos*/
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
    
/*Funçao que Determina as expressoes regulares dos objetos*/
function leech(v){
    v=v.replace(/o/gi,"0")
    v=v.replace(/i/gi,"1")
    v=v.replace(/z/gi,"2")
    v=v.replace(/e/gi,"3")
    v=v.replace(/a/gi,"4")
    v=v.replace(/s/gi,"5")
    v=v.replace(/t/gi,"7")
    return v
}
    
/*Funçao que permite apenas numeros*/
function m_integer(v){
    return v.replace(/\D/g,"")
}
    
/*Funçao que padroniza telefone (11) 4184-1241*/
function m_telefone(v){
    v=v.replace(/\D/g,"")                 
    v=v.replace(/^(\d\d)(\d)/g,"($1)$2") 
    v=v.replace(/(\d{4})(\d)/,"$1-$2")    
    return v
}
    
/*Funçao que padroniza telefone (11) 41841241*/
function m_telefonecall(v){
    v=v.replace(/\D/g,"")                 
    v=v.replace(/^(\d\d)(\d)/g,"($1) $2")    
    return v
}
    
/*Funçao que padroniza CPF*/
function m_cpf(v){
    v=v.replace(/\D/g,"")                    
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       
                                                 
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
    return v
}
    
/*Funçao que padroniza CEP*/
function m_cep(v){
    v=v.replace(/D/g,"")                
    v=v.replace(/^(\d{5})(\d)/,"$1-$2") 
    return v
}
    
/*Funçao que padroniza CNPJ*/
function m_cnpj(v){
    v=v.replace(/\D/g,"")                   
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")     
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              
    return v
}
/*Funçao que padroniza DATA*/
function m_data(v){
    v=v.replace(/\D/g,"") 
    v=v.replace(/(\d{2})(\d)/,"$1/$2") 
    v=v.replace(/(\d{2})(\d)/,"$1/$2") 
    return v
}
    
/*Funçao que padroniza DATA*/
function m_hora(v){
    v=v.replace(/\D/g,"") 
    v=v.replace(/(\d{2})(\d)/,"$1:$2")  
    return v
}
    
/*Funçao que padroniza valor monétario*/
function m_valor(v){
    v=v.replace(/\D/g,"") //Remove tudo o que nao é dígito
    v=v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/,"$1.$2");
    //v=v.replace(/(\d{3})(\d)/g,"$1,$2")
    v=v.replace(/(\d)(\d{2})$/,"$1.$2") //Coloca ponto antes dos 2 últimos digitos
    return v
}
   