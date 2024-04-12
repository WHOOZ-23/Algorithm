import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sum = 0;

        for(int i=0; i<5; i++) {
            int N = scanner.nextInt();

            sum += (int)Math.pow(N, 2);
        }

        System.out.println(sum%10);

        scanner.close();
    }
}