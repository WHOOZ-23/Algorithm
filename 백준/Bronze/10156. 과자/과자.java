import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int K = sc.nextInt();
        int N = sc.nextInt();
        int M = sc.nextInt();

        int money = K*N-M;

        System.out.println(0 < money ? money : "0");

        sc.close();
    }
}