def solution(chicken):
    order = []
    coupon = 0

    while chicken > 0:
        service_chicken = chicken // 10
        coupon += chicken % 10
        chicken = service_chicken

        if coupon >= 10:
            service_chicken += coupon // 10
            chicken = service_chicken
            coupon %= 10

        order.append(service_chicken)

    return sum(order)