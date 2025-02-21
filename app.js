/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/




const asciiHeart = [
  "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
  "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
  "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
  " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
  "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
  "     ⠉⢿⣿⣿⣿⠟⠋⠀",
  "⠀      ⠙⠻⠁"
]


// Comentar o quitar  comentario de los console.log (línea 98 y 51) de acuerdo a lo que desees qeu aparezca

//  Segunda funcion 

const animateByLine = (ms) => {
  for (let index = 0; index < asciiHeart.length; index++) {
    const element = asciiHeart[index];
    setTimeout(() => {
      console.log(element);
    }, ms * index);
  }
}

// console.log(animateByLine(100))

// Primera funcion

 const animateByChart = (ms) => {
  let characterCount = 0;
  let delay = 0;
  asciiHeart.forEach((element, index) => {
    
    // console.log(`Longitud de la línea ${index + 1}: ${element.length} caracteres`);
    // con esto miro las lineas y sus caracteres 

    element.split('').forEach((character, charIndex) => {
      delay += ms * charIndex

      //  Se podría definir variables dentro de los forEach (iteraciones) e inclusive una que calcule
      // el tiempo más abajo, pero de esta forma se evitan crear más líneas de código 

      setTimeout(() => {
        process.stdout.write(character);
        characterCount++;

        // Variable characterCount ira incrementando en la medida que el forEach
        // de character cumpla sus loops, se usará más adelante para realizar el salto de línea

          if (characterCount >= element.length){
            process.stdout.write('\n');
            characterCount = 0;
          }
    
      
        //  Por lo que pude ver asi se expresa el salto de lìnea,
        //   cada vez que characterCount (variable de conteo) sea igual o mayor que el total del valor element,
        //   que gracias al forEach ha sido delimitado por cada línea de String, está hara el salto.
        //   A parte de eso, después de pensarlo un rato, necesito que el if al finalizar su sentencia retorne el contador a 0,
        //   porque sino ira sumando y no se podrá apreciar la diferencia entre cada salto 

      }, delay);

  //    Para el tiempo el index indica la posición dentro de la línea,
  //  tenemos la variable delay que es el parametro ms * el charIndex del forEach
  //  de los character

  });
});
}

console.log(animateByChart(10)) 


