import { Receta } from "../interfaces/receta.interface";

export const canapes: Receta[] = [{
    name: 'Tartaletas saladas',
    img: 'assets/tartaletas_saladas_faciles_y_rapidas_76347_600.webp',
      categoryName: 'Recetas de Aperitivos y tapas',
    subCategory: {
      name: 'Canapés'
    },
    description: {
      desc: 'Preparar unos canapés para Navidad que sean fáciles, rápidos y económicos muchas veces resulta complicado. Por eso te queremos facilitar la tarea con una receta de tartaletas saladas rellenas con tres versiones diferentes muy fáciles de hacer. Debes saber que las tartaletas son un aperitivo que podrás preparar con antelación, con ingredientes que seguramente tengas por casa y, lo más importante, sin suponer un gran gasto económico.',
      comensales: 8,
      time: '30m',
      dificulty: 'baja',
      ingredients: [
        '100 gramos de queso crema',
        '1 lata de atún en aceite (unos 70g)',
        " 4 palitos de surimi",
        "25 gramos de pipas de calabaza",
        "100 gramos de sobrasada",
        "1 cucharada postre de miel",
        "150 gramos de filetes de pechuga de pollo",
        "1 cucharada postre de aceite de oliva",
        "3 rodajas de piña en almíbar",
        "100 gramos de mayonesa",
        "24 tartaletas pequeñas de compra",
      ],
      steps: [
        {
          description: 'Preparar estas tartaletas es muy fácil. En primer lugar, prepararemos la tartaleta salada fría. Para ello debes preparar la de queso crema, atún y surimi. Tan solo tienes que poner en un bol la lata de atún escurrida del aceite, el queso crema y los palitos de surimi troceados. Seguidamente, mezcla bien y reserva en la nevera.'
        }, {
          description: 'En segundo lugar, debes preparar las tartaletas de sobrasada y miel. Para hacerlas, debes poner una sartén al fuego sin nada de grasa y añadir las pipas de calabaza. Debes remover con una cuchara de madera, de esta forma evitarás que se quemen.'
        }, {
          description: 'A continuación, incorpora la sobrasada. Debes remover bien para que se caliente y, a la vez, se integre con las pipas de calabaza.'
        }, {
          description: 'Cuando tengas un compuesto homogéneo, incorpora la cucharita de miel y dale unas vueltas más hasta que esté todo bien integrado. Por último, retira el relleno para tartaletas saladas del fuego y resérvalo a temperatura ambiente.'
        }, {
          description: 'Finalizaremos preparando las tartaletas de pollo y piña. Primero, debes trocear los filetes de pechuga de pollo en tiras muy finas, puedes hacerlo con unas tijeras para que quede un corte más fino y pequeño. Luego, pon la cucharada de postre de aceite en una sartén al fuego y cuando esté caliente sofríe los trozos de pechuga en él. En caso de ser necesario, es el momento de añadir un poco de sal.'
        }, {
          description: 'A continuación, debes trocear finamente los trozos de piña y ponerlos en un bol junto con la pechuga sofrita.'
        }, {
          description: 'Acto seguido, debes añadir la mayonesa y mezclarlo bien. Reserva el relleno en la nevera hasta el momento de servir.'
        }, {
          description: 'Por último, rellena las tartaletas con todas las mezclas y ve depositándolas en la bandeja donde vayas a servirlas. ¡Y a disfrutar de las tartaletas rellenas! Asimismo, si quieres presentar las tartaletas en bandejas, no dudes en comprar las bandejas de cartón blanco que te ofrecemos en la web.'
        }
      ],
      plateType: 'Entrante'
    }
  }
]
