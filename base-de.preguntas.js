function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  
  let baseDePreguntas = [
    {
      pregunta: "¿Quién fue el autor principal del 'Manifiesto Comunista'?",
      ayuda: "Uno de los fundadores del materialismo histórico, junto con Friedrich Engels.",
      ayudaImg: "No hay pista",
      imagen: "",
      respuesta: "Karl Marx",
      distractores: ["Vladimir Lenin", "Friedrich Engels", "Joseph Stalin"],
    },
  
    {
      pregunta: "¿Qué sistema económico propone el comunismo?",
      ayuda: "El Estado controla los medios de producción y distribuye los recursos.",
      imagen: "",
      respuesta: "Económia planificada",
      distractores: ["Capitalismo", "Socialismo de Mercado","Neoliberalismo"],
    },
  
    {
      pregunta: "¿Qué revolución fue el primer gran éxito del comunismo en el siglo XX?",
      ayuda: "Ocurrió en 1917, liderada por los bolcheviques.",
      imagen: "",
      respuesta: "Revolución Rusa",
      distractores: ["Revolución Francesa", "Revolución Mexicana", "Revolución Cubana"],
    },

    //Anarquia

    {
      pregunta: "¿Cuál es la característica principal del anarquismo como doctrina política?",
      ayuda: "Su objetivo es una sociedad sin jerarquías ni autoridad centralizada.",
      imagen: "",
      respuesta: "Rechazo al Estado y a toda forma de autoridad coercitiva",
      distractores: ["Rechazo a la propiedad privada", "Apoyo al capitalismo", "Promoción de una dictadura"],
    },

    {
      pregunta: "¿Quién fue uno de los pensadores más influyentes en el anarquismo?",
      ayuda: "Fue un ferviente crítico de Marx y defensor del anarquismo.",
      imagen: "",
      respuesta: "Mijaíl Bakunin",
      distractores: ["Karl Marx", "Adam Smith", "Simón Bolívar"],
    },

    {
      pregunta: "¿Qué tipo de organización social propone el anarquismo?",
      ayuda: "Este sistema se basa en la cooperación sin jerarquías.",
      imagen: "",
      respuesta: "Sociedad autogestionada y horizontal",
      distractores: ["Centralización del poder en el gobierno", "Monarquía constitucional", "Sociedad autogestionada y horizontal", "Dictadura del proletariado"],
    },

   //Unión Cívica Radical

    {
      pregunta: "¿En qué año se fundó la Unión Cívica Radical en Argentina?",
      ayuda: "Fue una escisión de la Unión Cívica creada por Leandro N. Alem.",
      imagen: "",
      respuesta: "1891",
      distractores: ["1889", "1891", "1916", "1945"],
    },

    {
      pregunta: "¿Quién fue el primer presidente argentino electo por sufragio universal con la Unión Cívica Radical?",
      ayuda: "Fue presidente en 1916 y promovió una política popular y reformista.",
      imagen: "",
      respuesta: "Hipólito Yrigoyen",
      distractores: ["Juan Domingo Perón", " Hipólito Yrigoyen", "Ricardo Balbín", "Arturo Illia"],
    },

    {
      pregunta: "¿Cuál fue uno de los principales objetivos de la Unión Cívica Radical en sus inicios?",
      ayuda: "Se formó como un movimiento opositor al régimen conservador de la época.",
      imagen: "",
      respuesta: "Luchar contra la oligarquía y el fraude electoral",
      distractores: ["Luchar contra la oligarquía y el fraude electoral", "Promover el comunismo en Argentina", "Apoyar la industrialización del país", "Establecer una dictadura militar"],
    },

    // Peronismo

    {
      pregunta: "¿Cuál es el nombre de la doctrina política impulsada por Juan Domingo Perón?",
      ayuda: "Se basa en la 'tercera posición' entre capitalismo y comunismo.",
      imagen: "",
      respuesta: "Justicialismo",
      distractores: ["Justicialismo", "Liberalismo", "Conservadurismo", "Socialismo"],
    },

    {
      pregunta: "¿En qué año fue electo Juan Domingo Perón como presidente por primera vez?",
      ayuda: "Su elección fue tras el golpe militar de 1943, que lo llevó al poder como ministro de trabajo.",
      imagen: "",
      respuesta: "1946",
      distractores: ["1930", "1946", "1955", "1973"],
    },

    {
      pregunta: "¿Qué rol tuvo Eva Perón en la consolidación del peronismo?",
      ayuda: "Fundó la Fundación Eva Perón y luchó por el sufragio femenino.",
      imagen: "",
      respuesta: "Fue una líder social y defensora de los derechos de los trabajadores y mujeres",
      distractores: [" Fue una figura clave en la reforma laboral", "Lideró la nacionalización de empresas", "Fue una líder social y defensora de los derechos de los trabajadores y mujeres", "Fue la primera mujer en ser presidenta"],
    },

    // Socialismo
    

    {
      pregunta: "¿Cuál es la principal diferencia entre el socialismo y el comunismo?",
      ayuda: "El socialismo puede coexistir con el sector privado bajo ciertas regulaciones.",
      imagen: "",
      respuesta: "El socialismo admite un sector privado controlado mientras que el comunismo busca abolirlo por completo",
      distractores: ["El socialismo busca eliminar la propiedad privada y el comunismo no", "El socialismo admite un sector privado controlado mientras que el comunismo busca abolirlo por completo", "El socialismo promueve el libre mercado y el comunismo no", "No hay diferencias entre ambos"],
    },

    {
      pregunta: "Qué país fue el primer gran experimento socialista en América Latina?",
      ayuda: "Liderado por Fidel Castro en 1959.",
      imagen: "",
      respuesta: "Cuba",
      distractores: ["Argentina", "Cuba", "México", "Chile"],
    },

    {
      pregunta: "¿Qué se entiende por 'Socialismo Democrático?",
      ayuda: "Se distingue del comunismo por su enfoque en las libertades individuales y el sistema democrático.",
      imagen: "",
      respuesta: "Un socialismo que se basa en la democracia representativa y los derechos civiles",
      distractores: ["Un socialismo que se basa en la democracia representativa y los derechos civiles", "Un tipo de socialismo que apoya una dictadura del proletariado", "Un sistema económico donde el Estado controla todas las industrias", "Una forma de socialismo que rechaza las elecciones"],
    },


  
    
  
  ];