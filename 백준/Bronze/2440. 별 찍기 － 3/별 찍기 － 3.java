import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();

        for(int i=N; i>=1; i--) {
            for(int j=1; j<=i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        scanner.close();
    }
}