function solution(phone_book) {
    return !phone_book
        .sort()
        .map((phone, i) => {
            if (i < phone_book.length - 1) {
                if (phone_book[i + 1].startsWith(phone)) {
                    return 1;
                }
            }

            return 0;
        })
        .reduce((a, b) => a + b, 0);
}