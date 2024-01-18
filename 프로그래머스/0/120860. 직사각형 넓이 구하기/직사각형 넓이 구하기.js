function solution(dots) {
    let arr = [];
    let maxX = dots[0][0], 
        minX = dots[0][0], 
        maxY = dots[0][1], 
        minY = dots[0][1];
  
    for(let i=0; i<dots.length-1; i++) {
        maxX = maxX < dots[i+1][0] ? dots[i+1][0] : maxX;
        minX = minX > dots[i+1][0] ? dots[i+1][0] : minX;
        maxY = maxY < dots[i+1][1] ? dots[i+1][1] : maxY;
        minY = minY > dots[i+1][1] ? dots[i+1][1] : minY;
    }
    
    arr[0] = maxX - minX;
    arr[1] = maxY - minY;
  
    return arr[0]*arr[1];
}