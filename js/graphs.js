//Graphs by Militant Saumgweme

//References
//Educative.io


/*

A graph is a set of nodes that are connected to each other in the form of a network. First of all,
we’ll define the two basic components of a graph.

1) A vertex is an essential part of a graph. A collection of vertices forms a graph.
  In that sense, vertices are similar to linked list nodes.

2) An edge is a link between two vertices. It can be uni-directional or bi-directional, depending on your graph. An edge can also have a cost associated with it,
   which we will discuss in detail later.
 */

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes= [
    ['PHX','LAX'],
    ['PHX','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','LIM'],
    ['MEX','EZE'],
    ['LIM','BKK'],
];

// implement Adjacency List as a set of key value pairs
// Can implement adjaceny list with a regular JS or use a map , a map is recommended for graph operations it has additional API methods
// that can be used to solve problems like this - It has the same functionalities as a dictionary in other languages;

const adjacencyList = new Map();

// Add Node
function addNode(airport) {
    adjacencyList.set(airport ,[])
}
//Add edge , undirected graph

function addEdge(origin ,destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);

function dfs(graph ,start) {
    let stack = [start];
    let visited = new Set();
    while (stack.length >0){
        let current = stack.pop();
        for(let neighbour  of graph.get(current)){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                stack.push(neighbour);
                console.log(neighbour)
            }
            else{

            }
        }
    }
}

function bfs(graph ,start){
    let queue = [start];
    let visited = new Set();
    while (queue.length>0){
        let current = queue.shift();

        let airports  = graph.get(current)
        for(let neighbours of airports){

            if(neighbours ==='EZE'){
                console.log("Found it")
            }
            if(!visited.has(neighbours)){
                visited.add(neighbours);
                queue.push(neighbours);
                console.log(neighbours)
            }
        }
    }
}

function bfsRec(start){
    console.log(start);
    let visited = new Set();
    visited.add(start);

    let airports  = adjacencyList.get(start)
    for(let neighbours of airports){

        if(neighbours ==='EZE'){
            console.log("Found it")
        }
        if(!visited.has(neighbours)){
            bfsRec(airports ,neighbours);

        }
    }

}
// console.log("=============Start DFS==================");
//  dfs(adjacencyList,'LIM');
// console.log("==================End DFS===================");
console.log("=============Start BFS==================");
bfsRec('LIM');
console.log("=============Start BFS==================");


