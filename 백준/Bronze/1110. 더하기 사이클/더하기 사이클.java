import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int cnt = 0;
        int M = N;

        while(true) {
            cnt++;
            M = (M%10) * 10 + ((M/10) + (M%10)) % 10;

            if(N==M) break;
        }

        System.out.println(cnt);

        scanner.close();
    }
}