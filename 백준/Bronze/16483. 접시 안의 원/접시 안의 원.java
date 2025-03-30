import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        double answer = Math.pow(T, 2)/4;

        System.out.println((int) Math.round(answer));

        sc.close();
    }
}