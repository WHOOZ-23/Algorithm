function solution(players, callings) {
    const list = {};
    
    players.map((x, i) => list[x] = i);
    
    callings.map((x) => {
        const i = list[x];
        const temp = players[i-1];
        
        [players[i-1], players[i]] = [x, temp];
        [list[x], list[temp]] = [i-1, i];
    });
    
    return players;
}