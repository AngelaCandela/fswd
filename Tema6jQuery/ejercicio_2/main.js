// Escondemos el formulario y habilitamos el toggle a través del botón
$("#registerContainer").hide();

$("#toggleRegisterButton").click(function (e) {
    e.preventDefault();
    $("#registerContainer").slideToggle("fast");
});

// Configurar los eventos sobre los inputs
// Opción directa
$("#registerContainer input").hover(function () {
    $(this).addClass("bg-light");
}, function () {
    $(this).removeClass("bg-light");

}).focus(function () {
    $(this).removeClass("bg-light");
    $(this).addClass("bg-info");

}).blur(function () {
    $(this).removeClass("bg-info");
});

// Opción con bucle
$("#registerContainer input").each(function () {
    $(this).hover(function () {
        $(this).addClass("bg-light");
    }, function () {
        $(this).removeClass("bg-light");
    
    });

    $(this).focus(function () {
        $(this).removeClass("bg-light");
        $(this).addClass("bg-info");
    
    });

    $(this).blur(function () {
        $(this).removeClass("bg-info");
    });
});

// Comprobamos que todos los inputs estén rellenos para habilitar el botón

$("#registerContainer input").each(function () {
    $(this).change(function () {

        let filled = true;

        $("#registerContainer input").each(function () {
            if ($(this).val() == "")
                filled = false;
        });
        if (filled) {
            $("#registerButton").removeAttr("disabled");
        } else {
            $("#registerButton").attr("disabled", "disabled");
        }
    });
});

$("#registerButton").click(function (e) {
    e.preventDefault();
    alert("Registro realizado con éxito");

    $("#registerContainer input").each(function () {
        console.log($(this).val());
    });    
});