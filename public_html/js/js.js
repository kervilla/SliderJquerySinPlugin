/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    /*variables para paginacion*/
    /*llamamos al li del slider*/
    /*length me lleva la cuenta 
     * de cuantos elementos de ese tipo tengo*/
    /*tendria que tener 4 elementos (ver con 
     * console.log(imgItems)*/
    var imgItems = $('.slider li').length;
    /*creamos otra variable para nextItems*/
    /*esta es en posicion 1 porque la imagen que se carga esta
     * en la posicion numero uno*/
     var imgPos =1;
     /*posicion 1 para que aumente*/
    /*vamos a llamar a pagination osea a ol */
    /*append funciona para agregar elementos 
     * html en este caso la linea que necesitamos */
    /*ahora necesitamos un ciclo para que sea acorde
     * con las entradas de los li*/
    /*valor inicial en 1, solo se aumente si es
     *  menos o igual al numero de slider que se  tiene*/
    
    /*ASI AGREGAMOS DINAMICAMENTE */
    for (i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }



    /*desaparecer todas las imagenes y que solo aparezca la primera*/
    /*llamamos al slider u a las deapositivas osease los li*/
    /*y al cargar la pagina con el hide las hacemos desaparecer*/
    $('.slider li').hide();
    /*llamamos al primer li para mostrarla*/
    $('.slider li:first').show();
    /*llamamos a nuestra pagination al li PRIMERO*/
    /*al cargarse la pagina sale el primero con color diferente*/
    $('.pagination li:first').css({
        'color': '#CD6E2E'
    });

    /*mostrar diapositivas(slider) tocando la paginacion*/

    /*ejecutamos todas las funciones*/
    /*al hacerle un click se ejecutara otra funcion*/
    /*ejecutara en este caso a siguiente funcion llamada paginacion*/
    
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
    
    /*hasta este memento no existen estas funciones*/

    /*debemos crearlas*/
    
    setInterval(function(){
        nextSlider();
    }, 4000);

    /*--------------------FUNCIONES-------------------------------------------*/

    /*creamos la funcion pagination*/
    function pagination() {

        /*creamos una variable*/
        /*this para indicar el recienn oprimido*/
        /*Index me trae el numero de la posicion del elemnto*/
        var paginationPos = $(this).index() + 1;

        /*console.log(paginationPos);*/
        /*al hacer click en otra apaginacion se ocultara el resto
         * pero queremos mostrar la siguiente correspondiente */
        /**sumamos uno solo para que me comience en 1 y no en cero**/

        $('.slider li').hide();

        /*fadeIn efecto*/
        /*ntd-child(n) puedo indicar directamente el numero de hijo
         * pero lo necesitamos dinamico para ver  EN LA PAGcada imagen*/
        /*TRAEMOS LA POSICION DE LA IMAGENINACION*/

        $('.slider li:nth-child(' + paginationPos + ')').fadeIn();

        /*para el color de las bolitas de la paginacion*/
        /*al que se le da click en el momento s ele agrega el ccss*/
        /*ahora necesitamos que el color este solo en el click this*/

        $('.pagination li').css({'color': '#858585'});
        /*solo al que se le da click queda naranja*/
        $(this).css({'color': '#CD6E2E'});
        
        imgPos = paginationPos;
    }/**fin de funcion paginacion/
     
     
    /*creamos la funcion para las flechas*/
    /*para el siguiente slider*/

    function nextSlider() {
    /*para que se vaya aumentando con cada click*/
    if( imgPos >= imgItems){
        /*cuando no se cumpla vuelve a 1 por eso esto*/
     imgPos = 1;   
    }else{
       imgPos++; 
    }
    /*agregamos el color a los puentos como en la funcion anterior*/
     $('.pagination li').css({'color': '#858585'});
     $('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});
     
     /*ocultamos y mostramos solo el que se necesita*/
     $('.slider li').hide(); 
     $('.slider li:nth-child('+ imgPos +')').fadeIn();
     
     
    }/*fin funcion nextSlider*/
    
    
    
    function prevSlider() {
    /*para que se vaya aumentando con cada click*/
    if( imgPos <= 1){
        /*cuando no se cumpla vuelve a 1 por eso esto*/
     imgPos = imgItems;   
    }else{
       imgPos--; 
    }
    /*agregamos el color a los puentos como en la funcion anterior*/
     $('.pagination li').css({'color': '#858585'});
     $('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});
     
     /*ocultamos y mostramos solo el que se necesita*/
     $('.slider li').hide(); 
     $('.slider li:nth-child('+ imgPos +')').fadeIn();
     
     
    }/*fin funcion prevSlider*/
    

});

/* codigo js menu*/
var activeEl = 2;
$(function() {
    var items = $('.btn-nav');
    $( items[activeEl] ).addClass('active');
    $( ".btn-nav" ).click(function() {
        $( items[activeEl] ).removeClass('active');
        $( this ).addClass('active');
        activeEl = $( ".btn-nav" ).index( this );
    });
});


/*para registro y login*/

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});