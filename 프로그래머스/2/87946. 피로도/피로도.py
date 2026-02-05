result = 0

def solution(k, dungeons):
    visited = [False for _ in range(len(dungeons))]

    dfs(k, dungeons, visited, result)

    return result

def dfs(k, dungeons, visited, cnt):
    global result
    result = max(cnt, result)

    for i, dungeon in enumerate(dungeons):
        if not visited[i] and k >= dungeon[0]:
            visited[i] = True

            dfs(k - dungeon[1], dungeons, visited, cnt + 1)

            visited[i] = False

    return