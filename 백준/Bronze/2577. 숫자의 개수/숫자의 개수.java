import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] arr = new int[10];

        int A = scanner.nextInt();
        int B = scanner.nextInt();
        int C = scanner.nextInt();

        String result = Integer.toString(A*B*C);

        for(int i=0; i<result.length(); i++) {
            arr[result.charAt(i)-'0']++;
        }

        for(int a : arr) {
            System.out.println(a);
        }

        scanner.close();
    }
}