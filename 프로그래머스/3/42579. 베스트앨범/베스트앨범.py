def solution(genres, plays):
    album = {}
    genres_count = {}
    answer = []

    for i, genre in enumerate(genres):
        genres_count[genre] = genres_count.get(genre, 0) + plays[i]

        if genre not in album:
            album[genre] = []

        album[genre].append((plays[i], i))

    for key, value in album.items():
        album[key] = sorted(value, key=lambda x: x[0], reverse=True)

    for key, _ in sorted(genres_count.items(), key=lambda x: x[1], reverse=True):
        for _, i in album[key][:2]:
            answer.append(i)

    return answer