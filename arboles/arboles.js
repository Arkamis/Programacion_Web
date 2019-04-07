module.exports = class Arbol {
    constructor(){
        this.root = null;
    }

    addNode(value){
        //iniciamos nuestro dezplaciamiento desde el root
        if(!this.root) {
            var node = new Node(value);
            return this.root = node;
        }
        
        this.buscar(value, this.root);
    }
    buscar(valor, nodo){
        var node = new Node(valor);
        let currentNode = nodo;
       
        if (!currentNode){
            return currentNode.value = node;
        }
        else if (currentNode.value < valor) {
            if(!currentNode.rightChild) {
                return currentNode.rightChild = node;
            }
            return this.buscar(valor, currentNode.rightChild);
        }
        else if (currentNode.value > valor) {
            if(!currentNode.leftChild) {
                return currentNode.leftChild = node;
            }
            return this.buscar(valor, currentNode.leftChild);
        }
    }
    busquedaAnchura(valor){
        if(!this.root) return;
        var cola = [this.root];
        while (cola.length) {
            var node = queue.shift();
            if (node.value === valor) {
                console.log(`Nodo : ${node.value} encontrado!`)
                return node;
            }
            if(node.value == null) return null;
            queue.push(node.leftChild, node.rightChild);
        }
        return null;
    }

    borrarNodo(valor) {
        // caso especial: si el valor está en el
        var queue = [this.root];
        while (queue.length) {
            var node = queue.shift();
            for (var i = 0; i < node.children.length; i++) {
                if (node.children[i].value === value) {
                    node.children.splice(i, 1);
                }
                else {
                    queue.push(node.children[i]);
                }
            }
        }
    }  
    
    busquedaProfundidad(value, method){
        var current = this.root;
        switch(method) {
            case 'pre-order':
            return this._preOrder(value, current);
            case 'post-order':
            return this._postOrder(value, current);
            case 'in-order':
            return this._inOrder(value, current);
        }
    }
    _preOrder(valor, node) {
        let arrayNumbers = [];
        if(node){
            if(valor == node.value){
                console.log(`Encontramos tu numero!! ${valor}`);
            }
            arrayNumbers = arrayNumbers.concat(node.value);  
            arrayNumbers =arrayNumbers.concat(this._postOrder(valor, node.leftChild));
            arrayNumbers = arrayNumbers.concat(this._postOrder(valor, node.rightChild));
        }
        return arrayNumbers;
    }

    _postOrder(value, node){
        let arrayNumbers = [];
        if(node){
            if(value == node.value){
                console.log(`Encontramos tu numero!! ${value}`);
            }
            let izq = this._postOrder(value, node.leftChild);
            arrayNumbers =arrayNumbers.concat(izq);
            let drc = this._postOrder(value, node.rightChild);
            arrayNumbers = arrayNumbers.concat(drc);
            arrayNumbers = arrayNumbers.concat(node.value);            
        }
        return arrayNumbers;
    }
    _inOrder(value, node, array) {
        let arrayNumbers = [];
        if(node){
            if(value == node.value){
                console.log(`Encontramos tu numero!! ${value}`);
            }
            arrayNumbers = arrayNumbers.concat(this._inOrder(value, node.leftChild))
            arrayNumbers.push(node.value);
            arrayNumbers = arrayNumbers.concat(this._inOrder(value, node.rightChild));
        }
        return arrayNumbers
    }
}

class Node{

    constructor(val) {
        this.value = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}



