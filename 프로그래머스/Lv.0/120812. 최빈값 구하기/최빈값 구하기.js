function solution(array) {
  let arr = [];
  let cnt = 1;
  let many = 0;

  array.sort((a, b) => a-b);
  
  if(array.length === 1) return array[0];
  
  for(let i=0; i<array.length-1; i++) {
    if(array[i]!==array[i+1]) {
      arr.push(cnt);
      if(Math.max(...arr) === cnt) many = array[i];
      cnt = 1;
    } else {
      cnt++;
    }
    
    if(i+1 === array.length-1) {
      arr.push(cnt);
      if(Math.max(...arr) === cnt) many = array[i];
    }
  }
  
  let max = Math.max(...arr);
  
  return arr.indexOf(max) !== arr.lastIndexOf(max) ? -1 : many;
}