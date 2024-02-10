function solution(date1, date2) {
    const [y1, m1, d1] = date1;
    const [y2, m2, d2] = date2;
    
    if(y1<y2) {
        return 1;
    } else if(y1===y2) {
        if(m1<m2) {
            return 1;
        } else if(m1===m2) {
            if(d1<d2) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}