function solution(cacheSize, cities) {
    const cache = [];
    let time = 0;

    if (!cacheSize) return cities.length * 5;

    for (const city of cities.map((city) => city.toLowerCase())) {
        const index = cache.indexOf(city);

        if (0 <= index) {
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            if (cache.length === cacheSize) {
                cache.shift();
            }

            cache.push(city);
            time += 5;
        }
    }

    return time;
}