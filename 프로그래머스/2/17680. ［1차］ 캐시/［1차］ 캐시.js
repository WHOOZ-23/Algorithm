function solution(cacheSize, cities) {
    const cache = new Map();
    let time = 0;

    if (!cacheSize) return cities.length * 5;

    cities.forEach((city) => {
        if (cache.has(city.toUpperCase())) {
            cache.delete(city.toUpperCase());
            cache.set(city.toUpperCase(), true);
            time++;
        } else if (!cache.has(city.toUpperCase())) {
            if (cache.size < cacheSize) {
                cache.set(city.toUpperCase(), true);
                time += 5;
            } else if (cache.size === cacheSize) {
                cache.delete(cache.keys().next().value);
                cache.set(city.toUpperCase(), true);
                time += 5;
            }
        }
    });

    return time;
}