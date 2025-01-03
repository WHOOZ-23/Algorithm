import java.util.*;

class Solution {
    public int solution(int[][] maps) {
        int[] goal = {maps.length-1, maps[0].length-1};
        Queue<int[]> queue = new LinkedList<>();
        int[] dxs = {0, 0, -1, 1};
        int[] dys = {-1, 1, 0, 0};

        queue.offer(new int[]{0, 0, 1});

        while(!queue.isEmpty()) {
            int[] move = queue.poll();

            if(move[0] == goal[0] && move[1] == goal[1]) {
                return move[2];
            }

            for(int i=0; i<4; i++) {
                int dx = dxs[i] + move[0];
                int dy = dys[i] + move[1];

                if(0<=dx && dx<maps.length && 0<=dy && dy<maps[0].length && maps[dx][dy]==1) {
                    queue.offer(new int[]{dx, dy, move[2]+1});
                    maps[dx][dy] = 0;
                }
            }
        }

        return -1;
    }
}