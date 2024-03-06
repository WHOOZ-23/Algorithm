function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^\-|\_|\.|\w]/g, "")
        .replace(/\.+/g, ".")
        .replace(/(^\.|\.$)/g, "");
    
    if(new_id.length===0) new_id+="a";
    
    new_id = new_id.split("").filter((_, i) => i<15).join("").replace(/(^\.|\.$)/g, "");
    
    while(new_id.length<3) {
        new_id+=new_id[new_id.length-1];
    }
    
    return new_id;
}
