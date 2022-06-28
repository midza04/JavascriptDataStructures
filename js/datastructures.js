
// Implement a function findProduct(int arr[], int size), which takes
// an array arr and its size as an input, and returns an array so that each index has a product
// of all the numbers present in the array except the number stored at that index.

/*
   1)iInitialise the result array as arr[size]
   2)loop through the array and


 */
let findLeastNumOfUniqueInts = function(arr, k) {
    arr.sort();
    arr.splice(0,k);
    return arr.length;
    let res =[];

    for(let i=0;i<arr.length; i++){
        if(arr[i]!=arr[i+1]){
            res.push(arr[i]);
        }
    }
    console.log(res);

};

function findProduct(arr, size){
    let res;
    let result ;
    for(let i =0 ; i<size ;i++){
        let j=arr[i+1];
        result=arr[i];
        while (j <size){
            res =result*arr[j];
            j++;
        }
        console.log(res)

    }


}

// findProduct([1,2,3,4],4);
//findLeastNumOfUniqueInts([5,5,4], 1)

//Graphs

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
console.log("=============Start DFS==================");
dfs(adjacencyList,'LIM');
console.log("==================End DFS===================");
console.log("=============Start BFS==================");
bfs(adjacencyList,'PHX');
console.log("=============Start BFS==================");


