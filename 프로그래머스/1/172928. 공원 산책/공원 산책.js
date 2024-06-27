function solution(park, routes) {
    let result = [0, 0];
    
    park.map((x, i) => [...x].map((y, j) => {
        if(y === "S") result = [i, j];
    }));
    
    for(let i=0; i<routes.length; i++) {
        const step = +routes[i].split(" ")[1];
        let ok = true;

        if(routes[i].split(" ")[0] === "E" && result[1]+step < park[0].length) {
            for(let j=result[1]; j<=result[1]+step; j++) {
                if(park[result[0]][j] === "X") {
                    ok = false;
                    break;
                }
            }
            
            if(ok) result[1] += step;
        }

        if(routes[i].split(" ")[0] === "W" && 0 <= result[1]-step) {
            for(let j=result[1]; result[1]-step<=j; j--) {
                if(park[result[0]][j] === "X") {
                    ok = false;
                    break;
                }
            }
            
            if(ok) result[1] -= step;
        }

        if(routes[i].split(" ")[0] === "S" && result[0]+step < park.length) {
            for(let j=result[0]; j<=result[0]+step; j++) {
                if(park[j][result[1]] === "X") {
                    ok = false;
                    break;
                }
            }
            
            if(ok) result[0] += step;
        }

        if(routes[i].split(" ")[0] === "N" && 0 <= result[0]-step) {
            for(let j=result[0]; result[0]-step<=j; j--) {
                if(park[j][result[1]] === "X") {
                    ok = false;
                    break;
                }
            }
            
            if(ok) result[0] -= step;
        }
    }
    
    return result;
}