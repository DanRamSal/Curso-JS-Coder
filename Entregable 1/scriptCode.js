// Ejemplo con definicion de funcion.
function interaccionConCiclo() {
    let inputDelPrompt = '';
    let sumatoria = 0;
    alert('Aqui incia un ciclo que sumara todos' + 
          'los numeros que se vayan capturando en el prompt ' + 
           'para salir del ciclo escriba "salir" en el prompt');
    do {
        inputDelPrompt = prompt('Escriba la cantidad a sumar o "salir" para terminar');
        if(isNaN(parseInt(inputDelPrompt)))//Es un texto
        {
            inputDelPrompt.toLowerCase() != 'salir' ? alert('Comando invalido') : alert('La sumatoria es: ' + sumatoria);
        }
        else//si es numero
        {
            sumatoria += parseInt(inputDelPrompt);
        }
    } while(inputDelPrompt.toLowerCase() != 'salir');
}

//Ejemplo con definicion de expresion.
const creandoObjeto = function() {
    const unaPersona = {
        edad: 0,
        nombre: '',
        sexo: '',
        nacionalidad : '',
    }
    
    alert('Vamos a crear un objecto JSON de una persona en esta funcion y llenar sus propiedades '+
        ' con prompts');
        
    unaPersona.edad = prompt('Escriba la edad de la persona');
    unaPersona.nombre = prompt('Escriba el nombre de la persona');
    unaPersona.sexo = prompt('Escriba el sexo de la persona');
    unaPersona.nacionalidad = prompt('Escriba la nacionalidad de la persona');

    alert('El objeto creado es: ' + JSON.stringify(unaPersona));
}

// Ejemplo con definicion de funcion.
function creandoArreglo() {
    let inputDelPrompt = '';
    const arregloDeNumeros = [];
    let correcto = false;
    alert('A continuacion el promopt pedira un numero del 1 al 50 para ' + 
          'definit el tamaño del arreglo que se creara');
    do {
        inputDelPrompt = prompt('Escriba el tamaño del arreglo que se creara');
        if(isNaN(parseInt(inputDelPrompt)))//Es un texto
        {
            correcto = false;
        }
        else//si es numero
        {
            if(inputDelPrompt >= 1 && inputDelPrompt <= 50)
            {
                correcto = true
                for(let i = 0; i < inputDelPrompt; i++)\
                {
                    arregloDeNumeros.push(Math.floor(Math.random() * 100));
                }
            }
        }
    } while(!correcto);
}