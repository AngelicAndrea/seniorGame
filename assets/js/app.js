// función para el splash ====================================================================================
$(document).ready(function(){
    $(function(){
        setTimeout(function(){
           $('#splash').fadeOut(500);
        }, 2000);
     });

// desaparecer sesiones que no son de la página de inicio

$('#games').hide();

// función click sign up / log in ====================================================================================

$("#btn-sing-up").on("click",function(){ //hacer click en el boton de sign up se ejecuta las siguientes instrucciones
    $("#log-in").hide();
    $("#sign-up").show();//mostrar lo que desaparece en css
});

$('#btn-log-in').on("click",function(){
    $("#log-in").show();
    $("#sign-up").hide();
});

// Authentication ====================================================================================
$("#btn").click(function(){ // para crear una cuenta con firebase.
    console.log("hola");
    var email = $("#email-sign").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result = firebase.auth().createUserWithEmailAndPassword (email,password);// es parte de firebase, que rescata el valor del email y password.
        result.catch(e => alert(e.message))//ocurre cuando hay un error.
    }    
});

firebase.auth().onAuthStateChanged(function(user){ // es para verificar si esta bien la función on click
    if(user){
        console.log(user);
    }else{
        console.log("no se ha iniciado sección");
    }
});
// Log in ================================================================================================
$("#log-in-btn").click(function() {
    var email = $("#email-address").val();
    var pw = $("#user-password").val();
    if (email != "" && pw != "") {
      var promise = firebase.auth().signInWithEmailAndPassword(email,pw);
      promise.catch(e => alert(e.message))
    }    
});

// redirecionar al html de mi perfil ========================================================================

firebase.auth().onAuthStateChanged(function(user) { //si la sesión está inicida se redirecciona al perfil

    if (user) {
        var html = "miperfil.html";
        $(location).attr("href",html);
        
    } 
  });

})

// Post de usuario  ========================================================================

var idtexto = 0; 
$("#btn-send").click(function(){
    var post = $("#input-text").val();

    $("#texto").append (
        '<div class="col s12 offset-xl2 xl8 offset-xl2 white valign-wrapper" id="content-2">'+
            '<img class="responsive-img circle img-muro2"src="assets/images/perfil.jpg" alt="">'+
            '<h6 class="name-perfil-2"> Carmen Hernández </h6>'+
        '</div>'+
        '<div class="col s12 offset-xl2 xl8 offset-xl2 white valign-wrapper" id="texto">'+
            '<p>' + post + '</p>'+
        '</div>'
    )
});

$("#btn-photo").click(function(){
    $("#texto").append("<div id='icon-box' col s2 x2>"+
    "<i id='icon-perfil' class='fas fa-user fa-6x orange-text'></i>"+
    "</div>"+
    "<div col s10 x10>"+
    "<p class='name'>Carmencita Hernandez</p>" + "</div>"+
    "<img class='responsive-img img-game' src='assets/images/game.png' alt=''>");

});    

// Modal  ========================================================================

$(document).ready(function(){
    $('.modal').modal();
});

// función al hacer click en juegos ==================================================================================

$("#btn-inicio").on("click",function(){ //hacer click en el boton de sign up se ejecuta las siguientes instrucciones
    $("#games").hide();
    $(".muro").show();
})
// función al hacer click en inicio ==================================================================================

$("#btn-game").on("click",function(){ //hacer click en el boton de sign up se ejecuta las siguientes instrucciones
    $(".muro").hide();
    $("#games").show();
})

// finción al hacer click en el logo ===============================================================

$("#img-inicio").on("click",function(){ //hacer click en el boton de sign up se ejecuta las siguientes instrucciones
    $(".muro").show();
    $("#games").hide();
})
