function solution(dots) {
    let x = [...new Set(dots.map((dot) => dot[0]))];
    let y = [...new Set(dots.map((dot) => dot[1]))];
  
    return Math.abs((x[0]-x[1]) * (y[0]-y[1]))
}