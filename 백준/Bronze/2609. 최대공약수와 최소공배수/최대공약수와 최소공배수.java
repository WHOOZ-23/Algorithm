import java.util.*;

public class Main {
    public static int GCD(int a, int b) {
        if(a%b==0) {
            return b;
        } else {
            return GCD(b, a%b);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] n = scanner.nextLine().split(" ");
        int num1 = Integer.parseInt(n[0]);
        int num2 = Integer.parseInt(n[1]);

        System.out.println(GCD(num1, num2));
        System.out.println(num1 * num2 / GCD(num1, num2));

        scanner.close();
    }
}