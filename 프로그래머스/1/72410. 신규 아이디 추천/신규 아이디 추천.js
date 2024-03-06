function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/(^\.|\.$)/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/(^\.|\.$)/g, '');
    
    const len = new_id.length;
    
    return len < 3 ? new_id + new_id[len-1].repeat(3-len) : new_id;
}