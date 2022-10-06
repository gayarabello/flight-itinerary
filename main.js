const onewayTickets = [
    ['ES', 'JAM'],
    ['BRA', 'EUA'],
    ['AUS', 'GER'],
    ['PT', 'JAP'],
    ['JAM', 'AUS'],
    ['GER', 'SWE'],
    ['EUA', 'PT'],
    ['JAP', 'ES'],
]

/* const testSolution = [
    ['BRA', 'EUA'],
    ['EUA', 'PT'],
    ['PT', 'JAP'],
    ['JAP', 'ES'],
    ['ES', 'JAM'],
    ['JAM', 'AUS'],
    ['AUS', 'GER'],
    ['GER', 'SWE'],
]
 */
function getItinerary(tickets){
    const routesMap = new Map();
    const originalMap = new Map();
    

    for(const [origin, destiny] of tickets){
        originalMap.set(origin, destiny)
    }
    for(const [origin, destiny] of tickets){
        routesMap.set(destiny, origin)
    }
    let start;
    
    for(const key of originalMap.keys()){    
        if(!routesMap.has(key)) {
            start = key;
            break;
        }
    }
    
    let result = [];
    let iterator = start;
    while(originalMap.has(iterator)){        
        result.push(iterator)
        iterator = originalMap.get(iterator);
    }
    result.push(iterator)
    return result;
}

