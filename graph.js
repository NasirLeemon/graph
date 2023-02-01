
class Graph {
    constructor(){
        this.graph = {}
    }

    add(a,b){
        if (this.graph[a]) { 
            this.graph[a].push(b)
        }
        else{
            this.graph[a] = [b]
        }

        if (this.graph[b]) {
            this.graph[b].push(a)
        }
        else {
            this.graph[b] = [a]
        }
    }
}


const graph = new Graph()
graph.add(4,1)
graph.add(2,1)
graph.add(3,2)
graph.add(4,2)
graph.add(6,7)
graph.add(6,1)

console.log(graph);

