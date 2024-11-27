class Solution {
    static int result = 0;
    
    public int solution(int k, int[][] dungeons) {
        boolean[] visited = new boolean[dungeons.length];
        
        dfs(dungeons, visited, 0, k);
        
        return result;
    }
    
    public static void dfs(int[][] dungeons, boolean[] visited, int cnt, int k) {
        result = Math.max(result, cnt);
        
        for(int i=0; i<dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= k) {
                visited[i] = true;
                
                dfs(dungeons, visited, cnt + 1, k - dungeons[i][1]);
                
                visited[i] = false;
            }
        }
    }
}