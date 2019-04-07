# BINARY SEARCH TREE
Para probar la "app" modo consola que se creo se debe:
  1.- Bajar el proyecto desde ./Arboles
  2.- git install   para instalar los paquetes utilizados
  3.- node main.js   para correr (perdon por no poner npm start xd)
  
  ## Propiedades
 
 ### Agregar Nodo
 Para agregar un nodo debes seleccionar la opcion y asignarle un valor, la insercion se hace siguiendo las reglas de mayor y menor desde la raiz
 
 ### Busquedas o Recorridos
 Trabajamos con 2 tipos de busquedas. Existen las busquedas por **Anchura** y por **Profundidad**.
 Cabe mencionar que se manejaron ambas de diferentse formas.
 
 #### BFS (Breadth-first search)
 Busqueda por anchura recorre el arbol por niveles y regresa el numero que buscaste si se enctro, sino noregresa nada.
 
 #### DFS (Depth-First Search)
 
 Busqueda por anchura esta seccion la hicimos recursiva pues se trata de ir evaluando los nodos, cumpliendo una regla dependiendo el caso.
  
  1. PRE-ORDER: RAIZ, IZQ, DRC.
  2. POST-ORDER: IZQ, DRC, RAIZ.
  3. IN-ORDER: IZQ, RAIZ, DRC.
  
 El unico parametro que se da es el valor del nodo a buscar, sin embargo este es opcional.
 La instruccion regresa el array de los numeros posicionados.
  
  
