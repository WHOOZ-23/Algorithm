function solution(s) {
   return [...s].map((x, i) => {
       const count = s.slice(0, i).lastIndexOf(x);
       return count < 0 ? count : i - count;
   })
}