function solution(park, routes) {
    let result = [0, 0];
    
    park.map((x, i) => [...x].map((y, j) => {
        if(y === "S") result = [i, j];
    }));
    
    const numRows = park.length;
    const numCols = park[0].length;

    for(let i=0; i<routes.length; i++) {
        const direction = routes[i].split(" ")[0];
        const step = +routes[i].split(" ")[1];
        
        let newResult = [...result];
        let validMove = true;

        if(direction === "E") {
            if(result[1] + step < numCols) {
                for(let j = result[1] + 1; j <= result[1] + step; j++) {
                    if(park[result[0]][j] === "X") {
                        validMove = false;
                        break;
                    }
                }
                if (validMove) newResult[1] += step;
            }
        } else if(direction === "W") {
            if(result[1] - step >= 0) {
                for(let j = result[1] - 1; j >= result[1] - step; j--) {
                    if(park[result[0]][j] === "X") {
                        validMove = false;
                        break;
                    }
                }
                if (validMove) newResult[1] -= step;
            }
        } else if(direction === "S") {
            if(result[0] + step < numRows) {
                for(let j = result[0] + 1; j <= result[0] + step; j++) {
                    if(park[j][result[1]] === "X") {
                        validMove = false;
                        break;
                    }
                }
                if (validMove) newResult[0] += step;
            }
        } else if(direction === "N") {
            if(result[0] - step >= 0) {
                for(let j = result[0] - 1; j >= result[0] - step; j--) {
                    if(park[j][result[1]] === "X") {
                        validMove = false;
                        break;
                    }
                }
                if (validMove) newResult[0] -= step;
            }
        }
        
        if (validMove) {
            result = newResult;
        }
    }
    
    return result;
}
