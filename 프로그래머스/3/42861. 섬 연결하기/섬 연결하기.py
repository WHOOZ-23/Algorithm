def solution(n, costs):
    costs.sort(key=lambda x: x[2])

    parent = list(range(n))

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])

        return parent[x]

    def union(x, y):
        root_x = find(x)
        root_y = find(y)

        if root_x != root_y:
            parent[root_y] = root_x

            return True
        return False

    total = 0
    count = 0

    for f, s, cost in costs:
        if union(f, s):
            total += cost
            count += 1

        if count == n - 1:
            break

    return total