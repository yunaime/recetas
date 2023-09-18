import { Category } from "../interfaces/category.interface";

export const categories: Category[]  = [{
      name: 'Aperitivos y tapas',
      subcategories: [{
          img: 'assets/empanadas/card.webp',
          name: 'Empanadas',
          description: 'Una empanada es un alimento preparado compuesto por una fina masa de pan y levadura, masa quebrada o de hojaldre, rellena de cualquier alimento salado que se fríe o se cocina al horno. Son muy populares porque se pueden servir con una gran variedad de ingredientes para su relleno. Tenemos las empanadas de atún, las empanadas de pollos, las empanadas de carne o las empanadas de verduras con huevos.'
        }, {
          img: 'assets/canapes/card.jpg',
          name: 'Canapés',
          description: 'Los canapés son esos "bocados" que se preparan para servir como aperitivo, pasapalo o abrebocas en reuniones, fiestas o cenas de gala. En RecetasGratis.net tenemos una lista con las mejores recetas de canapés que podrás filtrar por precio, nivel de dificultad o sin son ligeros o no. Aprende cómo preparar volovanes, brochetas, tostadas y canapés en general de forma sencilla con recetas paso a paso que te ayudarán a sorprender y deleitar a todos.'
        }, {
          img: 'assets/bocaditosysandwiches/card.jpg',
          name: 'Bocadillos y sándwiches',
          description: 'En este listado de recetas encontrarás todo tipo de sándwiches fáciles y bocadillos, tanto calientes como fríos. Los sándwiches se caracterizan por elaborarse con pan de molde, mientras que los bocadillos se componen de pan francés o baguette, entre todos tipos de pan. Si tienes pensado organizar una fiesta con amigos o, simplemente, buscas una receta sencilla para la hora de la merienda, los bocadillos y sándwiches son siempre una opción perfecta. Puedes optar por bocadillos de lomo, sándwiches vegetales, bocadillos de queso, de pollo, sándwiches americanos, etc. Navega entre las diferentes recetas de sándwiches y bocadillos y selecciona las que más te gusten.'
        }, {
          img: 'assets/cremasparauntar/card.jpg',
          name: 'Cremas para untar',
          description: '  Patés caseros, mantequillas de sabores, hummus y dips son solo algunas de las cremas para untar que encontrarás en este completo listado. Este tipo de cremas se emplean para servir a modo de aperitivo con tostadas o galletas saladas, una opción ideal si tienes visitas inesperadas y no dispones de mucho tiempo para cocinar. Ofrecemos cremas para untar para todos los gustos, con carne, con pescado, con verduras, con queso, con frutas... Navega entre ellas y descubre el paso a paso para aprender a preparar paté de cerdo, paté de salmón, dip de queso azul, dip de berenjenas, hummus de garbanzos, hummus de remolacha, hummus de lentejas y largo etcétera.'
        }
      ]
  },
  {
    name: 'Arroces y cereales',
    subcategories: []
  }, {
    name: 'Aves y caza',
    subcategories: []
  }, {
    name: 'Cócteles y bebidas',
    subcategories: []
  }, {
    name: 'Ensaladas',
    subcategories: []
  },{
    name: 'Huevos y lácteos',
    subcategories: []
  }, {
    name: 'Mariscos',
    subcategories: []
  },
  {
    name: 'Pastas',
    subcategories: []
  },{
    name: 'Postres',
    subcategories: []
  }, {
    name: 'Salsas',
    subcategories: []
  }, {
    name: 'Sopas y cremas',
    subcategories: []
  }, {
    name: 'Verduras',
    subcategories: []
  },
  {
    name: 'Pezcados',
    subcategories: []
  },
  {
    name: 'Pan y bollerías',
    subcategories: [
      {
        img: 'assets/bizcochos/bizcocho_de_chocolate_en_freidora_de_aire_76887_300_square.webp',
        name: 'Bizcochos',
        description: 'El bizcocho en , es un tipo de masa empleada en la repostería para elaborar tartas, tortas y pasteles esponjosos. Los ingredientes básicos son la harina (generalmente de trigo), los huevos enteros y el azúcar o la sal. Hay innumerables recetas deliciosas de bizcocho que además de ser fáciles de hacer son económicas.'
      }, {
        img: 'assets/galletas/galletas_maria_caseras_75913_600.webp',
        name: 'Galletas',
        description: '  La galleta es un pastel horneado hecho con pasta de harina, mantequilla, azúcar y huevos. Además de estos, las galletas pueden incorporar una gran variedad de ingredientes tanto dulces como saladas, simple o rellenas o con frutos secos, chocolate, etc.'
      }
    ]
  },
  {
    name: 'Legumbres',
    subcategories: []
  },{
    name: 'Guisos y Potages',
    subcategories: []
  }, {
    name: 'Consejos de cocina',
    subcategories: []
  },{
    name: 'Carne',
    subcategories: []
  }
]
