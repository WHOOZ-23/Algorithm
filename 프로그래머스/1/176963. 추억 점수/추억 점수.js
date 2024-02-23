function solution(name, yearning, photo) {  
    return photo.map((x) => x.reduce((a, b) => name.includes(b) ? a+yearning[name.indexOf(b)] : a, 0));
}