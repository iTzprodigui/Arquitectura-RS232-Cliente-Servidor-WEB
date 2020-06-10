$(document).ready( function() {
    done();
});
    
function done() {
         setTimeout(function() { 
         updates(); 
         getJson();
         done();
         }, 1000);
}
    
function updates() {
    $.ajax({
        type: "GET",        //Cambiar a type: POST si necesario
        dataType: "json",   // Formato de datos que se espera en la respuesta
        url: "include/fetch.php",   // URL a la que se enviará la solicitud Ajax
    })
     .done(function( data, textStatus, jqXHR ) {
        $("tbody").empty();
        $.each(data.result, function(){
        $("tbody").append(
            "<tr>"+
            "<td>"+this['id']+ "</td>" +
            "<td>"+this['nombre'] + "</td>" +
            "<td>"+this['dispositivo'] + "</td>" +
            "<td>"+this['estado']+"</td>" +
            "<td>"+this['fecha']+"</td>" +
            "</tr>");
        });
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });
}

function getJson(){
    $.ajax({
        type: "GET",        //Cambiar a type: POST si necesario
        dataType: "json",   // Formato de datos que se espera en la respuesta
        url: "include/ultimoEstado.php",   // URL a la que se enviará la solicitud Ajax
    })
     .done(function( data, textStatus, jqXHR ) {
        $("#estado").empty();
        $.each(data.result, function(){
            if(this['estado'] == "ENCENDIDO\r\n" || this['estado'] == "ENCENDIDO"){
                $("#estado").append( '<p id = "encendido">'+ this['estado'] +'</p>');
            }

            if(this['estado'] == "APAGADO\r\n" || this['estado'] == "APAGADO"){
                $("#estado").append( '<p id = "apagado">'+ this['estado'] +'</p>');
            }
        });
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });
}