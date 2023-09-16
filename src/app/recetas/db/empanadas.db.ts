import { Receta } from "../interfaces/receta.interface";

export const empanadas: Receta[] = [{
    name: 'Empanadas caprese',
    img: 'assets/empanadas/caprese/empanadas_caprese_76621_600.webp',
    categoryName: 'Aperitivos y tapas',
    subCategory: {
      name: 'Empanadas'
    },
    description: {
      desc: 'El término caprese se refiere a la isla italiana de Capri. El plato original es una ensalada que funciona como uno de los símbolos gastronómicos de Italia, por la representación a la bandera que hace su combinación de colores. Y es que gracias a la albahaca, queso y tomate, hacen juego del verde, blanco y rojo, respectivamente. En esta oportunidad, queremos enseñarte a reversionar la presentación de la ensalada, utilizándola como relleno de unas deliciosas empanadas. Te enseñaremos algunos trucos para que no se exploten durante la cocción y le agregaremos un ingrediente que combina de maravilla y también es representativo de la zona.',
      comensales: 2,
      time: '30m',
      dificulty: 'baja',
      ingredients: [
        '8 discos de empanada',
        '3 tomates pequeños',
        "100 gramos de mozzarella",
        "2 cucharadas soperas de aceitunas negras en rodajas",
        "1 puñado de albahaca fresca",
      ],
      steps: [{
          description: 'Limpia y desinfecta la albahaca. Para ello, desprende cada hoja del ramillete y disponla en un colador, dentro de otro recipiente más grande. Llena con agua, agrega un chorro de vinagre y frota para limpiarlas. Levanta el colador para descartar el agua con tierra y vuelve a llenarlo, esta vez, con una solución de 1 gota de lavandina apta alimentos por litro de agua. Deja reposar por 15 minutos y luego escurre.',
          imgUri: 'assets/empanadas/caprese/empanadas_caprese_76621_paso_0_600.webp'
        }, {
          description: 'Mientras, corta el queso mozarella en cubos y el tomate. Puedes combinar un queso mozarella con un queso cremoso si lo deseas, o bien ricota.'
        }, {
          description: 'Pica o corta con una tijera de cocina las hojas de albahaca y añade las aceitunas en rodajas. Este es el último ingrediente, que combina muy bien y también es propio de la zona. En esta imagen ya puedes ver la clara referencia a la bandera italiana.'
        }, {
          description: 'Comienza a rellenar, humedeciendo con la yema de tus dedos la mitad del disco. Agrega una cucharada de relleno de las empanadas caprese, une los bordes enfrentados y junta las puntas hacia adelante, para darles la clásica forma de las empandas caprese. Llévalas al frío antes de cocinarlas.'
        }, {
          description: 'Disponlas en la freidora de aire y cocínalas a 200 ºC por unos 7 minutos. Cocinarlas a temperatura máxima es otro truco para que no se exploten, además de cocinarlas bien frías. Si no tienes freidora de aire, puedes cocinarlas en el horno, procurando calentarlo previamente a temperatura máxima.'
        }, {
          description: 'Sirve tus empanadas y disfrútalas. ¡A comer! Cuéntanos si las pruebas y comparte la foto del resultado final.'
        },
      ],
      plateType: 'Principal'
    }
  }, {
    name: 'Empanadas cordobesas',
    img: 'assets/empanadas/cordobesas/empanadas_cordobesas_76874_600.webp',
    categoryName: 'Aperitivos y tapas',
    subCategory: {
      name: 'Empanadas'
    },
    description: {
      desc: 'En Argentina se puede encontrar gran variedad de empanadas, ya son parte del ADN gastronómico. Sin embargo, en cada región, los ingredientes principales varían de acuerdo a las costumbres o alimentos característicos de cada una. En esta oportunidad, te enseñaremos a hacer empandas cordobesas. Su particularidad es que contienen papa entre sus ingredientes, combinada con carne, cebolla, morrón, huevo y aceitunas. El resultado es un relleno cremoso, sabroso y jugoso que no querrás dejar de probar',
      comensales: 4,
      time: '1h 30m',
      dificulty: 'baja',
      ingredients: [
        '500 gramos de carne picada',
        '1 papa',
        "500 gramos de cebolla",
        "½ morrón rojo",
        "2 huevos",
        "20 aceitunas",
        "½ cucharada postre de comino",
        "3 ramas de cebolla de verdeo",
        "1 pizca de nuez moscada",
        "1 cucharada postre de pimentón",
        "1 pizca de pimienta",
        "12 discos de empanada",
        "2 papas"
      ],
      steps: [
        {
          description: 'El primer paso para hacer las empanadas cordobesas consiste en lavar bien la piel de las papas para cocinarlas en abundante agua por unos 20 minutos hasta que, al pincharlas, se sientan tiernas, pero todavía se sujeten del tenedor.'
        }, {
          description: 'Mientras, lava y pica la cebolla de verdeo, separando por un lado la parte blanca de la verde.'
        }, {
          description: 'También pela y pica la cebolla blanca para saltearla en una sartén a fuego máximo con 1 cucharada de aceite.'
        }, {
          description: 'Cuando transparente, añade la parte blanca de la cebolla de verdeo y el morrón limpio, sin semillas ni nervaduras y picado del mismo tamaño que la cebolla. Baja el fuego a medio y, si se seca el salteado, añade 1 cucharada de agua caliente. Repite tantas veces como sea necesario hasta que las verduras estén bien cocidas.'
        }, {
          description: 'Cuando las verduras estén cocidas, retíralas y resérvalas. En el mismo fondo de cocción, agrega la carne con el fuego bien alto. Puedes saltearla en tandas para que no se hierva y se dore, que es lo que buscamos en este paso.'
        }, {
          description: 'Mientras, pela y corta en cubos pequeños las papas cocidas ya frías para mezclarlas con la parte verde de la cebolla de verdeo, las aceitunas en rodajas y las verduras salteadas. Condimenta al gusto con el comino, nuez moscada, pimentón y pimienta.'
        }, {
          description: 'Cocina los huevos por 12 minutos desde agua fría. Pasado ese tiempo, pélalos con cuidado de no quemarte, pícalos y mézclalos con la preparación anterior y la carne salteada.'
        }, {
          description: 'Cuando el relleno esté bien frío, arma las empandas humedeciendo uno de los bordes con la yema de los dedos. Comienza a cerrarlas de un lado al otro, retirando el aire que pueda quedar dentro para que no se exploten durante la cocción.'
        }
      ],
      plateType: 'Principal'
    }
  }, {
    name: 'Empanadas 4 quesos',
    img: 'assets/empanadas/4quesos/empanadas_4_quesos_76838_600.webp',
    categoryName: 'Aperitivos y tapas',
    subCategory: {
      name: 'Empanadas'
    },
    description: {
      desc: 'Si eres fanático de los quesos, no puedes dejar de probar estas empanadas. En ellas, mezclamos quesos suaves, como la mozzarella y el queso cremoso, junto con quesos con sabor más intenso, como es el caso del parmesano y el queso azul. Además, su combinación con el orégano es un éxito. Quédate leyendo si quieres conocer los trucos para que estas empanadas de 4 quesos no se abran durante la cocción, perdiendo su relleno en la asadera donde se cocinan.',
      comensales: 2,
      time: '30m',
      dificulty: 'baja',
      ingredients: [
        '100 gramos de queso mozzarella',
        '100 gramos de queso cremoso',
        "30 gramos de queso rallado",
        "50 gramos de queso azul",
        "1 cucharada sopera de orégano",
        " 6 tapas de empanada",
        "1 cucharada sopera de harina",
      ],
      steps: [
        {
          description: 'Para empezar con la preparación de las empanadas 4 quesos, corta el queso mozzarella, el queso cremoso y el queso azul en cubos. Puedes agregar más o menos de cada variedad de acuerdo a tu gusto. También puedes reemplazar el queso cremoso por uno semiduro, como el gouda. Recomendamos no eliminar el queso mozzarella o reemplazarlo por queso fresco, ya que se derrite demasiado.'
        }, {
          description: 'Por otro lado, ralla el queso parmesano. Puedes usar otros quesos duros como el reggianito. Este queso le dará un sabor picante a la empanada, aportando la parte más intensa, como el queso azul.'
        }, {
          description: 'Mezcla en un recipiente los quesos en cubos con el queso rallado. Agrega el orégano y la cucharada de harina. Este ingrediente absorberá la humedad de los quesos, haciendo que no generen demasiado vapor durante la cocción y, entonces, abra la empanda, perdiendo el relleno. Es un consejo fundamental para disfrutar de unas empanadas 4 quesos perfectas.'
        }, {
          description: 'Rellena cada disco de empanada, humedeciendo ligeramente el borde de uno de sus lados. No agregues demasiado relleno o esto también hará que las empanadas se exploten durante su cocción. Ciérralas llevando el aire de un lado al otro y asegúrate de que no quede nada dentro. Ciérralas uniendo las dos puntas hacia adelante.'
        }, {
          description: 'Ubica tus empanadas quesos al horno en una asadera previamente engrasada. Cocínalas en el horno pre calentado a temperatura máxima, es decir, a 200-220 ºC por unos 20 minutos o hasta que estén doradas. Asegúrate que el horno haya alcanzado la temperatura antes de cocinarlas y no abras el horno sino hasta que falte poco para su cocción total, ya que el contraste de temperatura también puede explotarlas.'
        }, {
          description: '¡A comer! Cuéntanos si las pruebas y comparte la foto del resultado final.'
        }
      ],
      plateType: 'Principal'
    }
  }, {
    name: 'Empanadas de salchicha',
    img: 'assets/empanadas/salchichas/empanadas_de_salchicha_76505_600.webp',
    categoryName: 'Aperitivos y tapas',
    subCategory: {
      name: 'Empanadas'
    },
    description: {
      desc: 'Si pensamos en salchicha, enseguida nos imaginamos un pancho o hot dog. Sin embargo, en esta oportunidad buscamos innovar y mostrarte opciones distintas para que disfrutes de cocinar y probar nuevos platos. Utilizaremos las salchichas para preparar el relleno de unas deliciosas empanadas, combinándolas con aderezos y queso para que el resultado sea irresistible. Puedes servirlas como plato principal o bien como entrante, junto a otros ingredientes clásicos de picada, por ejemplo, snacks. Serán perfectas para tu próximo cumpleaños o una reunión con amigos para disfrutar una película o un partido de ese club del que son fanáticos.',
      comensales: 2,
      time: '30m',
      dificulty: 'baja',
      ingredients: [
        '3 salchichas',
        '100 gramos de queso mozzarella',
        "3 cucharadas soperas de mayonesa",
        "1 cucharada postre de ketchup",
        "½ cucharada postre de salsa inglesa",
        "6 discos de empanada",
      ],
      steps: [
        {
          description: 'El primer paso para esta receta de empanadas de salchicha consiste en mezclar la mayonesa con el ketchup y la salsa inglesa. Si lo prefieres, puedes usar directamente salsa golf, pero esta opción te permite hacerla a tu gusto y darle el toque distintivo de la salsa inglesa. También puedes reemplazarla por barbacoa, la cual combina perfectamente con las salchichas, al igual que la mostaza, o bien no utilizar ningún tipo de aderezo.'
        }, {
          description: 'Por otro lado, corta las salchichas al medio y luego en medias rueditas. Recomendamos elijas alguna ahumada, tipo alemana, en lugar de las clásicas para pancho, sobre todo si las preparas para adultos. \n Truco: al utilizarlas crudas deberás lavarte bien las manos luego de manipularlas y tener especial cuidado si estás preparando esta receta con niños.'
        }, {
          description: 'Mezcla las salchichas con la salsa golf'
        }, {
          description: 'Prepara también los discos de empanada, corta el queso mozzarella en cubos y ten a mano un cuenco con un poco de agua para ayudarte a cerrar las empanadas de salchicha.'
        }, {
          description: 'Agrega una cucharada de las salchichas con la salsa golf en el centro del disco y unos cubos de queso. Humedece la mitad del borde con el agua y cierra las empanadas.'
        }, {
          description: 'Una vez cerradas, haz un poco de presión con la yema de los dedos para asegurarte que no pierdas el relleno en la cocción. Hazles un repulgue a tu gusto para decorarlas y terminar de sellarlas.'
        }, {
          description: 'Disponlas en una asadera con su base cubierta con pan rallado, el cual hará que no se peguen. Si lo deseas, puedes pintarlas con huevo batido. Cocínalas en el horno precalentado a 200-220ºC por unos 15 minutos o hasta que estén doradas. \n Truco: corrobora que estén doradas por la puerta del horno, sin abrirla o el shock de temperatura podría explotarlas.'
        }, {
          description: 'Una vez listas, disfruta de estas deliciosas empanadas de salchicha. ¿Qué te pareció esta receta? Cuéntanos en los comentarios tu opinión y comparte con nosotros una fotografía del resultado final.'
        }
      ],
      plateType: 'Principal',

      additionalInfo:
      `
      Con qué acompañar las empanadas de salchicha:

      Como comentábamos al principio de esta receta, estas empanadas son ideales para un cumpleaños o picada. En ese caso, podrías acompañarlas con otras opciones simples y elegidas por todos, como son las pizzetas, empanadas de otros gustos, pinchos de queso y cherry, snakcs, etc. Por otro lado, también puedes modificar este relleno combinando las salchichas y el queso con cebolla caramelizada y por qué no, un chucrut casero, para hacerlas más del estilo alemán.

      Asimismo, si quieres preparar una gran variación de empanadas, no te pierdas estas exquisitas recetas:

      <div>
        Empanadas de berenjena
        Empanadas de bondiola
        Empanada calabresa
        Empanadas fugazzeta
        Empanadas sin carne
      </div>
      `

    }
  }, {
    name: 'Empanadas de pollo peruanas',
    img: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_600.webp',
    categoryName: 'Empanadas',
    subCategory: { name: 'Empanadas'},
    description: {
      plateType: '',
      comensales: 12,
      time: '2h 30m',
      dificulty: 'Baja',
      ingredients: [
        '250 gramos de harina',
        '125 gramos de mantequilla o manteca vegetal',
        '78 gramos de agua fría',
        '15 gramos de huevo',
        '4 gramos de sal',
        '30 gramos de azúcar en polvo',
        'huevo para barnizar c/n',
        '1 pechuga de pollo grande',
        '½ cebolla roja',
        '1 cucharada sopera de ajo molido',
        '2 cucharadas soperas de ají panca',
        'aceitunas negras',
        'huevos',
        'perejil picado c',
        '½ ají amarillo fresco picado (opcional)',
        '1 pizca de pimienta negra molida'
      ],
      desc: 'Las empanadas de pollo peruanas llevan una masa crocante con una base de harina y mantequilla o manteca, rellena de pollo sazonado con ají panca, cebolla, ajo, aceituna negra, ají amarillo, perejil y huevos sancochado. En Perú, las empanadas se disfrutan como aperitivo a cualquier hora del día acompañadas de un café negro, por tanto, puedes encontrarlas en todas las panaderías y cafeterías de todos los rincones del país.'
      ,
      steps: [
        {
          description: 'Empieza haciendo la masa. Para ello, mezcla la harina, el azúcar impalpable y la sal con los cubos de mantequilla fría. Puedes utilizar la batidora con el accesorio de paleta para hacerlo más fácil y rápido.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_0_600.webp'
        }, {
          description: 'Cuando estos ingredientes tengan la textura de arena mojada, agrega el agua fría y el huevo. Mezcla solo hasta que empieces a ver que la masa se está uniendo, inmediatamente para la batidora y termina de amasar con las manos hasta obtener una masa uniforme, pero sin calentarla. Si la masa se ve brillosa es porque la mantequilla se calentó mucho. Truco: una masa sobretrabajada significa que se desarrolló el gluten, por lo que se sentirá dura y al estirar se encogerá rápidamente quedando muy gruesa.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_1_600.webp'
        }, {
          description: 'Seguidamente, estira la masa entre dos papeles manteca, tapetes de silicona o papel film de esta manera no agregarás más harina a la receta. Debe quedar de un grosor de 4mm aproximadamente. Refrigera y deja reposar por 2 horas o mejor si es por toda la noche.',
         imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_2_600.webp'
        }, {
          description: 'Mientras la masa reposa, realiza el relleno. Empieza picando la cebolla, las aceitunas y el ají amarillo en pequeños dados. También sancocha los huevos por 12 minutos y córtalos en gajos.',
         imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_3_600.webp'
        }, {
          description: 'En una tabla para carnes, corta la pechuga de pollo en dados pequeños (cuanto más pequeños mejor) y séllalos en una sartén caliente con un chorro de aceite. Reserva aparte.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_4_600.webp'
        }, {
          description: 'Vuelve a calentar la misma sartén y vierte otro chorro de aceite. Cuando esté caliente, añade la cebolla picada y deja sofreír.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_5_600.webp'
        }, {
          description: 'Cuando la cebolla se vea traslúcida, incorpora el pollo sellado y sazona con ajo molido, ají panca molido, sal y pimienta al gusto. Mezcla bien.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_6_600.webp'
        }, {
          description: 'Cuando el pollo, el ajo y el ají estén bien cocidos, rectifica el sabor y retira de fuego. Deja entibiar y agrega las aceitunas, el ají amarillo y el perejil picado.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_7_600.webp'
        }, {
          description: 'Para armar las empanadas, enharina tus manos y la mesa de trabajo, separa alrededor de 50 gramos de la masa, bolea y estira en forma de óvalo con la ayuda de un rodillo.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_8_600.webp'
        }, {
          description: 'En un extremo coloca un par de cucharadas de relleno, una pieza de huevo y con ayuda de la cuchara presiona hasta que quede obtenga la forma de una bola compacta.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_9_600.webp'
        }, {
          description: 'Cubre el relleno con la otra mitad de masa dejando un dedo de exceso y, luego, afínalo haciendo presión con los dedos. Truco: si hay demasiado exceso puedes cortar con un aro para que quede más prolijo.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_10_600.webp'
        }, {
          description: 'Para sellar y tener un diseño bonito en la empanada de pollo y huevo, ve apretando y girando poco a poco este exceso de masa para cerrar el borde.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_11_600.webp'
        }, {
          description: 'Para finalizar, barniza las empanadas con el huevo batido y hornea a 180 °C por 40 minutos o hasta que obtengan un color dorado uniforme.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_12_600.webp'
        }, {
          description: 'Retira del horno y acompaña con gajos de limón y una ají de rocoto. ¡Listas para degustar las empanadas de pollo jugosas! Cuéntanos en los comentarios tu opinión y comparte con nosotros una fotografía del resultado final.',
          imgUri: 'assets/empanadas/peruanas/empanadas_de_pollo_peruanas_76604_paso_13_600.webp'
        }
      ],
      additionalInfo: `
      Variedad de rellenos para las empanadas peruanas de pollo
      Si te ha sobrado masa, puedes envolverla en papel film y congelar hasta la próxima vez que quieras comer algo rico y práctico. Ahora, esta masa la puedes rellenar con carne, pollo deshilachado y en lugar de ají panca puedes utilizar ají amarillo o mirasol para hacer una empanada tipo ají de gallina peruano. También puedes hacer un clásico que es de queso y jamón o puedes usar cualquier proteína y verduras que te hayan sobrado del almuerzo o cena para rellenarlas.

      `
    },
  }
]
