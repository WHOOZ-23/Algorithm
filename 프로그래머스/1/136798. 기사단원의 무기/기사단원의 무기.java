class Solution {
    public int solution(int number, int limit, int power) {
        int [] arr = new int [number+1];
        int sum = 0;

        for (int i = 1; i <= number; i++) {
            for (int j = i; j <= number; j=j+i) {
                arr[j] += 1; ;
            }
        }

        for (int i = 1; i <= number; i++) {

            if( arr[i] > limit)
                sum += power;
            else
                sum+=arr[i];

        }
        
        return sum;
    }
}