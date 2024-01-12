function solution(array) {
  if (array.length === 0) {
    return -1;
  }
    
  const frequencyMap = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let maxFrequency = 0;
  let modes = [];
  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      modes = [parseInt(num)];
    } else if (frequencyMap[num] === maxFrequency) {
      modes.push(parseInt(num));
    }
  }
  return modes.length > 1 ? -1 : modes[0];
}