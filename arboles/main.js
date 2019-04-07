const Arbol = require('./arboles');
const readLine = require('readline-sync');
var arbol = new Arbol();

function main() {
    var seleccion = callMyMenu('Menu de opciones');
    let nodeValue = parseInt(readLine.question('Cual es valor de tu nodo (Entero Numerico)?'));
   
    switch(seleccion) {
        case 1:
            console.log('Opcion 1 elegida agregando Nodo');
            arbol.addNode(nodeValue);
        break;
        case 2:
            console.log('Opcion 2 elegida Borrando nodo');
            arbol.remove(nodeValue);
        break;
        case 3: 
            console.log('Opcion 3 Busqueda por Anchura');
            arbol.busquedaAnchura(nodeValue);
        break;
        case 4:
            console.log('Opcion 4 Busqueda por Profundidad');
            let opc = ['post-order', 'pre-order', 'in-order'];
            let method = readLine.keyInSelect(opc, 'Tipo de busqueda profunda te gustaria? R/:');
            let resultado = arbol.busquedaProfundidad(nodeValue, opc[method]);
            console.log(typeof(resultado), resultado);
        break;
    }

    var continuar = readLine.question('\n\tTe gustaria seguir jugando con el arbol?').toLowerCase();
    if(['si','s', 'y', 'yes'].includes(continuar)) return main();

}  

function callMyMenu(msg) {
    console.log(msg); 
    var opciones = ['Agregar', 'Borrar', 'BFS', 'DFS']
    let opcion = parseInt(readLine.keyInSelect(opciones, 'Que opcion elijes?...'));

    if(opcion in [1,2,3,4]) return opcion + 1;
    return callMyMenu('Opcion no valida elige otra opcion:');
}
main();