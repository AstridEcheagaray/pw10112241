var a = 0; /*Declaraciones de variables   funciona en cualquier parte - global*/
        let b = 0; /*scope - alcance - ambito     nada mas funciona en donde se declare - local*/
        const pi = 3.1416; /*imnutable*/
        alert("JS en proceso");
        function boton(){
            alert("Click");
        }
        /*(){ /*para que se ejecute sola, que no puedan usarla en consola
            alert("Funcion anonima");
        }*/
        const flecha = ()=>{ //se le pone const porque la funcion no va a cambiar arrow function
            alert("Funcion flecha - anonima");
        }        