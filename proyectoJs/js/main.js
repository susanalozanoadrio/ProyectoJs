$(document).ready(function () {

  //Slider
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      pager: true
    });
  }

  //Post
  if (window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum accumsan arcu vitae sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce felis massa, posuere id tellus eu, elementum tempus massa. Mauris pretium dui ut lacus varius pellentesque. Aenean sit amet consequat quam. Nulla facilisi. Vivamus viverra finibus tortor vulputate porttitor. Vestibulum non laoreet dui. Aliquam in sodales nibh, at porttitor mauris. Fusce a feugiat erat. Nunc in augue non lacus porta vehicula. Quisque viverra turpis eu viverra faucibus.'
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum accumsan arcu vitae sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce felis massa, posuere id tellus eu, elementum tempus massa. Mauris pretium dui ut lacus varius pellentesque. Aenean sit amet consequat quam. Nulla facilisi. Vivamus viverra finibus tortor vulputate porttitor. Vestibulum non laoreet dui. Aliquam in sodales nibh, at porttitor mauris. Fusce a feugiat erat. Nunc in augue non lacus porta vehicula. Quisque viverra turpis eu viverra faucibus.'

      },
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum accumsan arcu vitae sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce felis massa, posuere id tellus eu, elementum tempus massa. Mauris pretium dui ut lacus varius pellentesque. Aenean sit amet consequat quam. Nulla facilisi. Vivamus viverra finibus tortor vulputate porttitor. Vestibulum non laoreet dui. Aliquam in sodales nibh, at porttitor mauris. Fusce a feugiat erat. Nunc in augue non lacus porta vehicula. Quisque viverra turpis eu viverra faucibus.'

      },
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum accumsan arcu vitae sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce felis massa, posuere id tellus eu, elementum tempus massa. Mauris pretium dui ut lacus varius pellentesque. Aenean sit amet consequat quam. Nulla facilisi. Vivamus viverra finibus tortor vulputate porttitor. Vestibulum non laoreet dui. Aliquam in sodales nibh, at porttitor mauris. Fusce a feugiat erat. Nunc in augue non lacus porta vehicula. Quisque viverra turpis eu viverra faucibus.'

      },
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum accumsan arcu vitae sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce felis massa, posuere id tellus eu, elementum tempus massa. Mauris pretium dui ut lacus varius pellentesque. Aenean sit amet consequat quam. Nulla facilisi. Vivamus viverra finibus tortor vulputate porttitor. Vestibulum non laoreet dui. Aliquam in sodales nibh, at porttitor mauris. Fusce a feugiat erat. Nunc in augue non lacus porta vehicula. Quisque viverra turpis eu viverra faucibus.'

      }
    ];

    posts.forEach((item, index) => {
      var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <p class="fecha">${item.date}</p>
          <p class="articulo">${item.content}</p>
          <a class="button-more" href="#">Leer más</a>
        </article>
        `;
      console.log(post);
      $("#posts").append(post);
    });
  }

  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  //Scroll arriba de la web

  $(".subir").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //Login falso

  $('#login form').submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong><br>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

    $('#login').hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  if (window.location.href.indexOf('about') > -1) {
    $("#acordeon").accordion();
  }

  if (window.location.href.indexOf('reloj') > -1) {
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000)

  }

  //Validacion del formulario contact
  if (window.location.href.indexOf('contact') > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });

    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    })
  }


});