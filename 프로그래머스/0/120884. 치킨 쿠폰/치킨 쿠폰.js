function solution(chicken) {
    let coupon = chicken, service = 0

    while(coupon >= 10){
        let newService = ~~(coupon/10)
        service += newService
        coupon = coupon % 10 + newService
    }
    
    return service;

}