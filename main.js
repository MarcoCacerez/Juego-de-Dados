//Marco Aldair de Jesus Caceres 18390579

//Clase del jugador
function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
    this.ganados = 0;
}

//Clase encargada de realizar cada juego
function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    //Esta funcion es la encargada de simular las tiradas de dados, empleando la funcion Math.random
    //se utilizo Math.floor debido a que el Math.random devuelve numeros decimales entre 0 y 1
    this.tirarDados = function() {
        //Tiradas del jugador 1
        this.jugador1.caraDado1 = Math.floor((Math.random()*7)+1); 
        this.jugador1.caraDado2 = Math.floor((Math.random()*7)+1); 

        //Tiradas del jugador 2
        this.jugador2.caraDado1 = Math.floor((Math.random()*7)+1); 
        this.jugador2.caraDado2 = Math.floor((Math.random()*7)+1); 
    }

    //funcion empleada para poder determinar que jugador gano el juego
    this.determinaGanador = function() {
        //variable que almacena el resultado de sumar las 2 caras de los dados tirados
        let cantJ1 = this.jugador1.caraDado1 + this.jugador1.caraDado2;
        let cantJ2 = this.jugador2.caraDado1 + this.jugador2.caraDado2;
        
        //en caso de que el jugador uno tenga un 7 y el jugador 2 no, se determina que gano
        if ( (cantJ1 == 7) && (cantJ2 != 7) ) {
            //aumentamos el atributo de juegos ganados en 1
            this.jugador1.ganados++;
            //retornamos el nombre de este para poder imprimirlo en la consola
            return this.jugador1.nombre
        }
        else if ( (cantJ2 == 7) && (cantJ1 != 7) ) {
            this.jugador2.ganados++;
            return this.jugador2.nombre
        }
        //en caso de tener los mismos valores de determina que empataron
        else return "Empate";
    }
}

//creacion de los jugadores
let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
//contador que nos ayuda a determinar en que juego van;
let i = 1;

//utilizamos un while para realizar todos los juegos hasta encontrar un ganador
//en caso de que algun jugador llegue a 3 juegos ganas se deja de iterar
while(pedro.ganados <3 && antonio.ganados <3){
    //creamos el objeto del juego
    let juego1 = new JuegoDados(i, pedro, antonio);
    //ejecutamos la funcion tirarDados
    juego1.tirarDados();
    //procedemos a determinar un ganador
    let ganador = juego1.determinaGanador();
    //imprimimos el nombre del jugador que gano y el numero de juego en el que van
    console.log("Juego ",i, " ganador " ,ganador);
    //aumentamos nuestro contador
    i++;
}

//despues de salir del bucle, se determina cual de los jugadores resulto ganador
//imprimimos el nombre del jugador que gano el torneo
if (pedro.ganados == 3){
    console.log("Ganador del torneo ", pedro.nombre);
}else{
    console.log("Ganador del torneo ", antonio.nombre);
}
//imprimimos la cantidad de juegos totales
console.log("Juegos Totales " + (i-1) );
