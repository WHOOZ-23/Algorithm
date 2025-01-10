import java.util.*;

class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        String[] arr = Integer.toString(n, k).split("0");
        
        for(String s : arr) {
            if(s.isEmpty()) {
                continue;
            } else {
                long l = Long.parseLong(s);
                
                if(isPrime(l)) answer++;
            }
        }

        return answer;
    }

    public boolean isPrime(long n) {
        if(n == 1) return false;

        for(int i=2; i<=Math.sqrt(n); i++) {
            if(n%i == 0) return false;
        }

        return true;
    }
}