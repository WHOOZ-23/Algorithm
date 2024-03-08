function solution(wallpaper) {
    let lux, luy, rdx, rdy;
    let arrX = [];
    let arrY = [];
    
    wallpaper.forEach((x, i) => {
        x.split("").forEach((y, j) => {
            if(y==='#') {
                arrX.push(i);
                arrY.push(j);
            }
        });
    });
    
    lux = Math.min(...arrX);
    luy = Math.min(...arrY);
    rdx = Math.max(...arrX)+1;
    rdy = Math.max(...arrY)+1;
    
    return [lux, luy, rdx, rdy];
}