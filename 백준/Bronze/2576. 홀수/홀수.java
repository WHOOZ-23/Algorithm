import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] arr = new int[7];
        boolean isEven = true;
        int sum = 0;
        int min = 100;

        for(int i=0; i<7; i++) {
            int n = scanner.nextInt();

            if(n%2==1) {
                arr[i] = n;
                isEven = false;
            }
        }

        if(isEven) {
            System.out.println("-1");
        } else {
            for(int a : arr) {
                sum += a;

                if(0 < a) {
                    min = Math.min(min, a);
                }
            }

            Arrays.sort(arr);

            System.out.println(sum);
            System.out.println(min);
        }

        scanner.close();
    }
}