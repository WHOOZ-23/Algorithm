function solution(array) {
  const frequencyMap = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let maxFrequency = 0;
  let mode = -1;

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = parseInt(num);
    } else if (frequencyMap[num] === maxFrequency) {
      mode = -1;
    }
  }

  return mode;
}