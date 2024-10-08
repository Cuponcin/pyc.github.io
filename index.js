let INDEX_PREGUNTA = 0;
let puntaje = 0;
let tiempoRestante = 15; // Establece el tiempo en segundos
let temporizador;

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  objetoPregunta = baseDePreguntas[index];

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  if (objetoPregunta.ayuda) {
    document.getElementById("ayuda").style.display = "";
  } else {
    document.getElementById("ayuda").style.display = "none";
  }

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];

  reiniciarTemporizador();
}


function reiniciarTemporizador() {
  // Detener el temporizador si ya está en funcionamiento
  if (temporizador) {
    clearInterval(temporizador);
  }

  // Mostrar el tiempo inicial
  mostrarTiempo(tiempoRestante);

  // Configurar el temporizador para disminuir el tiempo cada segundo
  temporizador = setInterval(function () {
    tiempoRestante--;

    // Mostrar el tiempo restante
    mostrarTiempo(tiempoRestante);

    // Verificar si se agotó el tiempo
    if (tiempoRestante <= 0) {
      clearInterval(temporizador); // Detener el temporizador
      tiempoAgotado();
    }
  }, 1000); // Actualizar cada segundo
}

function mostrarTiempo(tiempo) {
  // Actualizar el elemento HTML con el tiempo restante
  document.getElementById("tiempo").innerHTML = `Tiempo restante: ${tiempo} segundos`;
}

async function tiempoAgotado() {
  // Mostrar un mensaje de tiempo agotado
  await Swal.fire({
    title: "Tiempo agotado",
    text: "Se acabó el tiempo para responder la pregunta.",
    icon: "warning",
    confirmButtonText: "OK",
  });

  // Continuar con la siguiente pregunta
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  tiempoRestante = 15; // Establece el tiempo inicial para la siguiente pregunta
  cargarPregunta(INDEX_PREGUNTA);
}

async function seleccionarOpción(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
    actualizarPuntaje(); // Llama a la función para actualizar el puntaje
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue : ${puntaje}/${baseDePreguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  tiempoRestante = 15; // Establece el tiempo inicial para la siguiente pregunta
  cargarPregunta(INDEX_PREGUNTA);
}

function actualizarPuntaje() {
  // Actualiza el elemento HTML con el puntaje actualizado (solo el número)
  document.getElementById("puntaje").innerHTML = puntaje;
}

function ayuda() {
  Swal.fire({
      title: "Pista",
      text: objetoPregunta.ayuda,
      imageUrl: objetoPregunta.ayudaImg,
      imageHeight: 300,
  });
}