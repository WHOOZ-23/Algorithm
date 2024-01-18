function solution(spell, dic) {
    const equals = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  
    return dic.filter((x) => equals(spell.sort(), x.split("").sort())).length > 0 ? 1 : 2;
}