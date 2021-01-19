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

// Empieza el ejercicio 3

function fillPosts(posts) {
    posts.forEach(post => {
        $("#postsContainer").append(            
            `
                <h2>${post.title}</h2>
                <small>Written by User ${post.userId}. Post nº ${post.id}</small>
                <p>${post.body}</p>
            `
        )
    });
};

// Opción con $.ajax
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

/* $("#loginButton").click((e) => {
    e.preventDefault();

    // Primera petición para obtener usuarios
    $.ajax({
        async: true, // Default
        type: "GET", // Default
        url: USERS_URL,
        dataType: "json",
        beforeSend: function () {
            console.log("LOADING");
        }
    }).done(users => {
        const foundUsers = users.filter(user => user.username === $("#loginUsernameInput").val());
        if (foundUsers.length > 0) {
            const ID = foundUsers[0].id;

            // Segunda petición para obtener posts
            $.ajax({
                url: POSTS_URL,
                dataType: "json",
                beforeSend: function () {
                    console.log("LOADING");
                }
            }).done(posts => {
                const myPosts = posts.filter(post => post.userId === ID);
                if (myPosts.length > 0) {
                    fillPosts(myPosts);
                }
            });
        }
    });
}); */

// Opción con $.get
$("#loginButton").click((e) => {
    e.preventDefault();

    $.get(USERS_URL, users => {
        const foundUsers = users.filter(user => user.username === $("#loginUsernameInput").val());
        if(foundUsers.length > 0)           
            $.get(POSTS_URL, posts => fillPosts(posts.filter(post => post.userId === foundUsers[0].id)));
    });
});