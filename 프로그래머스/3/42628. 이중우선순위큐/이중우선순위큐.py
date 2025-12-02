import heapq


def solution(operations):
    answer = []
    heap = []

    for o in operations:
        if 'I' in o:
            heapq.heappush(heap, int(o.split()[1]))
        elif heap and 'D' in o:
            if "-1" in o:
                heapq.heappop(heap)
            elif "1" in o:
                max_heap = [-x for x in heap]
                heapq.heapify(max_heap)
                heapq.heappop(max_heap)
                heap = [-x for x in max_heap]
                heapq.heapify(heap)

    if heap:
        max_heap = [-x for x in heap]
        heapq.heapify(max_heap)
        answer.append(-heapq.heappop(max_heap))
        answer.append(heapq.heappop(heap))
    else:
        answer.extend([0, 0])
        
    return answer