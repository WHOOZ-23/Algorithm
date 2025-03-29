import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int max = 0;
        int sum = 0;

        for(int i=0; i<4; i++) {
            int out = sc.nextInt();
            int in = sc.nextInt();

            sum += in;
            sum -= out;

            max = Math.max(max, sum);
        }

        System.out.println(max);

        sc.close();
    }
}