function ajustaPagina(){
    $(".principal").addClass("lt");
}

function removeAjustePagina() {
    $(".principal").removeClass("lt");
}

//Abaixo vai a função para o upload da imagem

$(document).ready(function() {
    $("#imagem").click(function() {
        self.executar();
    });
});

function executar() {
    $("#im_us").trigger('click');
}


//Mascara para campo de telefone

function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; 
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; 
 
    if(telefone.value.length == 8)
        telefone.value = telefone.value + '-';
  
}