import heapq


def solution(jobs):
    line = []
    job_idx = 0
    time = 0
    completed = 0
    answer = 0
    
    jobs.sort()

    while completed < len(jobs):
        while job_idx < len(jobs) and jobs[job_idx][0] <= time:
            heapq.heappush(line, [jobs[job_idx][1], jobs[job_idx][0]])
            job_idx += 1

        if line:
            l, s = heapq.heappop(line)
            time += l
            answer += time - s
            completed += 1

        else:
            time = jobs[job_idx][0]

    return answer // len(jobs)