function solution(cacheSize, cities) {
    const cache = new Map();
    let time = 0;

    if (!cacheSize) return cities.length * 5;

    for (const city of cities.map((city) => city.toLowerCase())) {
        if (cache.has(city)) {
            cache.delete(city);
            cache.set(city, true);
            time++;
        } else if (!cache.has(city)) {
            if (cache.size === cacheSize) {
                cache.delete(cache.keys().next().value);
            }

            cache.set(city, true);
            time += 5;
        }
    }

    return time;
}