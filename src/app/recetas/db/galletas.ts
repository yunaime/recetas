import { Receta } from "../interfaces/receta.interface";

export const galletas: Receta[] = [
  {
    name: 'Galletas de avena y limón',
    categoryName: 'Pan y bollerías',
    img: 'assets/galletas/avena_y_limon/galletas_de_avena_y_limon_76327_600.webp',
    subCategory: {
      name: 'Galletas',
    },
    description: {
      desc: 'Las galletas de avena y limón son muy sencillas de realizar, por tanto, son ideales para aquellas personas que le gustan preparar recetas fáciles y rápidas sin dejar de lado el sabor. Además, puedes realizarlas con los más pequeños de la casa. También son geniales para tener en una lata en la cocina, ya que sacará de apuros en más de una merienda o un desayuno o en aquellos momentos que tengas ganas de algo dulce y por qué no, para que tus hijos lleven en la vianda del colegio. Con pocos ingredientes y un poco más de media hora, estarás saboreando estas deliciosas galletas que te enseñamos.',
      comensales: 4,
      time: '30m',
      plateType: 'Desayuno',
      dificulty: 'Baja',
      ingredients: [
        '100 gramos de harina 0000',
        '100 gramos de avena',
        '75 gramos de azúcar',
        '2 cucharadas soperas de aceite neutro (girasol o soja)',
        '1 huevo',
        '1 cucharada postre de polvo para hornear',
        '1 cucharada postre de esencia de vanilla',
        '1 limón'
      ],
      steps: [
        {
          description: 'El primer paso antes de comenzar a preparar las galletas de limón saludable consiste en untar con aceite y enharina una placa. También enciende el horno para precalentarlo a 180°C.'
        },
        {
          description: 'Lava bien el limón y sécalo. A continuación, ralla su piel, exprímelo y cuela el jugo para descartar semillas y hollejos. Reserva la ralladura y el jugo.'
        },
        {
          description: 'Mezcla en un bol todos los ingredientes secos: harina, avena, polvo para hornear y azúcar. Truco: para proporcionar más textura a las galletitas de limón saludables, utilizamos avena en hojuelas, pero si prefieres, puedes usar harina de avena y elaborar unas deliciosas galletas de harina de avena.'
        },
        {
          description: 'Realiza un hueco en el centro e incorpora el huevo, la esencia de vainilla, el aceite, la ralladura y la mitad del jugo de limón.'
        },
        {
          description: 'Integra todos los ingredientes formando una pasta homogénea. Si la masa lo requiere, agrega el resto del jugo de limón.'
        },
        {
          description: 'Toma porciones de la masa con una cuchara y colócalas sobre la placa aceitada y enharinada. Ayúdate con la misma cuchara humedecida para formar las galletas. Procura que no queden muy bajitas para que, al hornearlas, queden crocantes por fuera, pero tiernas en su interior.'
        },
        {
          description: 'Lleva a horno precalentado a 180 °C por alrededor de 15 minutos. Recuerda que los tiempos de cocción son orientativos, porque dependerán de tu horno y del tamaño de las galletas.'
        },
        {
          description: 'Cuando las galletas de avena y limón se doren un poco de la base, pero la superficie quede blanquita, retíralas del horno y deja enfriar sobre una rejilla.'
        },
        {
          description: 'Las galletitas con delicioso sabor a limón, ya están listas para saborearlas con un rico té. Si no vas a consumirlas al momento, puedes guardarlas en un recipiente hermético. ¡Listas! ¿Te gustó esta receta? Comparte con nosotros tu opinión en comentarios.'
        }
      ],
      additionalInfo:
      `
        Con qué acompañar las galletitas de limón y avena
        Las galletas de avena y limón son exquisitas tal cual salen del horno. Sin embargo, puedes hacer algunas variantes y veras qué versátiles son:

        Úsalas como tapitas de alfajor. Puedes rellenarlos con dulce de leche, mermelada o mantequilla de maní y obtener un riquísimo alfajor.
        Puedes reemplazar el limón por otros cítricos como naranja o mandarina.
        Agrega 2 cucharadas de coco rallado en el punto 3 de la preparación.
        Asimismo, si te gusta la avena, te recomendamos deleitar a toda la familia preparando otras recetas con este producto tan saludable:

        Nachos de avena
        Pepas de avena
        Pan con harina de arroz y avena
        Pan de avena en sartén
        Budín de avena y mandarina
      `
    },

  }
]
