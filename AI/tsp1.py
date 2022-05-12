
inf = float("inf")
def tsp(distance,  source_city,  visited, path, N):
    cost = 0
    count = 0
    visited[source_city] = 1
    current = source_city
    while count != N-1:
        min = inf
        for i in range(N):
            if distance[current][i] < min and visited[i] == 0:
                min = distance[current][i]
                minIdx = i
        visited[minIdx] = 1
        current = minIdx
        cost += min
        path.append(current + 1)
        count += 1
    cost += distance[current][source_city]
    path.append(source_city + 1)
    return cost


if __name__ == '__main__':
    distance = [
        [inf, 10,  15,  20],
        [10,  inf, 35,  25],
        [15,  35,  inf, 30],
        [20,  25,  30,  inf]
    ]

    source_city = 0
    visited = [0]*4

    path = []
    path.append(source_city+1)
    cost = tsp(distance, source_city, visited, path, 4)
    print("Cost:", cost)
    for i in path:
        print(i, "->", end="")
